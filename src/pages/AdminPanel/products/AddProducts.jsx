import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../redux/api/supabase/supabaseClient";
import Swal from "sweetalert2";

const AddProduct = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Boş input yoxlaması
    if (!title || !price || !imgUrlOne || !imgUrlTwo || !description || !category || !stock || !brand || !sku) {
      Swal.fire("Error", "Please fill out all fields!", "error");
      return;
    }

    // Yeni məhsulun Supabase-ə əlavə edilməsi
    const { error } = await supabase.from("jubilee-products").insert([
      {
        title,
        price,
        img_url_one: imgUrlOne,
        img_url_two: imgUrlTwo,
        description,
        category,
        stock,
        brand,
        sku,
      },
    ]);

    if (error) {
      console.error("Supabase Error:", error);
      Swal.fire("Error", "Failed to add product!", "error");
    } else {
      Swal.fire("Success", "Product added successfully!", "success");
      setTimeout(() => {
        navigate("/dashboard"); 
      }, 2000);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
