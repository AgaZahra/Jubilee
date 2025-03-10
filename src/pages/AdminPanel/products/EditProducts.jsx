import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../../redux/api/supabase/supabaseClient";
import swal from "sweetalert";

const EditProduct = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrlOne, setImgUrlOne] = useState("");
  const [imgUrlTwo, setImgUrlTwo] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [sku, setSku] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const { data, error } = await supabase.from("jubilee-products").select("*").eq("id", id).single();
    if (error) console.log("Supabase Error:", error);
    else {
      setTitle(data.title);
      setPrice(data.price);
      setImgUrlOne(data.img_url_one);
      setImgUrlTwo(data.img_url_two);
      setDescription(data.description);
      setCategory(data.category);
      setStock(data.stock);
      setBrand(data.brand);
      setSku(data.sku);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("jubilee-products")
      .update({
        title,
        price,
        img_url_one: imgUrlOne,
        img_url_two: imgUrlTwo,
        description,
        category,
        stock,
        brand,
        sku,
      })
      .eq("id", id);

    if (error) {
      console.error("Supabase Error:", error);
    } else {
      swal("Product updated successfully!", "", "success");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Product</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL One</label>
          <input type="text" className="form-control" value={imgUrlOne} onChange={(e) => setImgUrlOne(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL Two</label>
          <input type="text" className="form-control" value={imgUrlTwo} onChange={(e) => setImgUrlTwo(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Brand</label>
          <input type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">SKU</label>
          <input type="text" className="form-control" value={sku} onChange={(e) => setSku(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
