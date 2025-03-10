import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../redux/api/supabase/supabaseClient";
import { urls } from "../../shared/urls/index";
import Swal from "sweetalert2";
import { Table } from "react-bootstrap";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("jubilee-products").select("*");
    if (error) console.log("Supabase Error:", error);
    else setProducts(data);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const { error } = await supabase.from("jubilee-products").delete().eq("id", id);
      if (error) {
        console.error("Supabase Error:", error);
        Swal.fire("Error", "Failed to delete the product.", "error");
      } else {
        Swal.fire("Deleted!", "Product deleted successfully.", "success");
        setProducts(products.filter(product => product.id !== id)); // Silinən məhsulu state-dən çıxarırıq
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Products Dashboard</h2>
      <Link to={urls.ADD_PRODUCT} className="btn btn-success my-3">Add Product</Link>
      <Table bordered hover className="table">
        <thead className="head">
          <tr>
            <th>#</th>  
            <th scope="col">Photo</th>
            <th scope="col" >Title</th>
            <th scope="col" >Brand</th>
            <th scope="col" >Price</th>
            <th scope="col" >Stock</th>
            <th scope="col" >Edit</th>
            <th scope="col" >Delete</th>
          </tr>
        </thead>
        <tbody className="body">
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td> 
              <td>
                <img src={product.img_url_one} alt={product.id} width={70} />
              </td>
              <td>{product.title}</td>
              <td> {product.brand}</td>
              <td>${product.price}</td>
              <td> {product.stock}</td>
              <td>
                <Link to={`${urls.EDIT_PRODUCT.replace(":id", product.id)}`} className="btn btn-primary mx-2">Edit</Link>
              </td>
              <td>
                <button onClick={() => handleDelete(product.id)} className="btn btn-danger">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
