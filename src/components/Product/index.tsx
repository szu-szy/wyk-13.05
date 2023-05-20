import { useEffect, useState } from "react";
import { Product as ProductType } from "../../App";
import { Link, useParams, useNavigate } from "react-router-dom";

export const Product = () => {
  const [product, setProduct] = useState<ProductType>();
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      if (!response.ok) throw Error("Something wrong with response");
      setProduct(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = () => setIsReadOnly((prev) => !prev);
  const handleSave = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      if (!res.ok) throw Error("Response is undefined");
      navigate("/products");
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw Error("Response is undefined");
      navigate("/products");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(id);
  }, [id]);

  return product && !isLoading ? (
    <section className="product">
      <nav>
        <Link to="/products/2">Product 2</Link>
        <Link to="/products/3">Product 3</Link>
        <Link to="/products/4">Product 4</Link>
        <Link to="/products/5">Product 5</Link>
      </nav>
      {isReadOnly ? (
        <>
         <button onClick={handleEdit}>Edytuj</button>
          <h1>{`${product.title}: ${product.price}`}</h1>
          <h2>{product.brand}</h2>
          <span>Kategoria: {product.category}</span>
          <p>{product.description}</p>
        </>
      ) : (
        <>
          <ul>
            <li>
              <button onClick={handleSave}>Zapisz</button>
            </li>
            <li>
              <button onClick={handleDelete}>Usun</button>
            </li>
          </ul>
          <h2>Edytuj produkt {product.title}</h2>
          <form onSubmit={handleSave}>
            <button type="submit">Zapisz</button>
          </form>
        </>
      )}
      {product.images.length > 0 ? (
        <ul className="product__images">
          {product.images.map((image, index) => (
            <li key={index}>
              <img src={image} alt={`${product.title} image ${index + 1}`} />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  ) : (
    <>
      <h1>No item detected</h1>
    </>
  );
};
