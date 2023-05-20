import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Product as ProductType } from "../../App";
import { Link, useParams, useNavigate } from "react-router-dom";

export const Product = () => {
  const [product, setProduct] = useState<ProductType>({
    title: "",
    description: "",
    price: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  });
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleEdit = () => setIsReadOnly((prev) => !prev);
  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(id) {
      try {
        const {
          title, description, price, brand, category
        } = product
        const res = await fetch(`https://dummyjson.com/products/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            price,
            brand,
            category
          }),
        });
        const data = await res.json();
        if (!res.ok) throw Error("Response is undefined");
        setProduct(data);
        setIsReadOnly(true);
        alert("Pomyślnie zaktualizowano!");
      } catch (e) {
        console.log(e);
      }
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
              <button onClick={handleDelete}>Usun</button>
            </li>
          </ul>
          <h2>Edytuj produkt {product.title}</h2>
          <form onSubmit={handleSave}>
            <div>
              <label htmlFor="title">
                Tytul:
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                Opis:
                <input
                  type="text"
                  id="description"
                  name="description"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="price">
                Cena:
                <input
                  type="number"
                  id="price"
                  name="price"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="brand">
                Firma:
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="category">
                Kategoria:
                <input
                  type="text"
                  id="category"
                  name="category"
                  onChange={handleChange}
                />
              </label>
            </div>
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
