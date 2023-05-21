import { useProductForm } from "./hooks/useProductForm";

export const ProductForm = () => {
  const {product, handleChange, handleSave} = useProductForm();

  return (
    <div className="form-section">
      <h2>Dodaj nowy produkt {product.title}</h2>
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
    </div>
  );
};
