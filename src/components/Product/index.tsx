import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Product as ProductType } from "../../App";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useProduct } from "./hooks/useProduct";

export const Product = () => {
  const {
    product,
    isLoading,
    isReadOnly,
    handleDelete,
    handleSave,
    handleChange,
    handleEdit,
  } = useProduct();

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
      {product.images && product.images.length > 0 ? (
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
