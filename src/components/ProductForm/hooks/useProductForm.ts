import { ChangeEvent, FormEvent, useState } from "react";
import { Product } from "../../../App";

type UseProductFormData = {
  product: Product;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSave: (e: FormEvent<HTMLFormElement>) => void;
};

export const useProductForm = (): UseProductFormData => {
  const [product, setProduct] = useState<Product>({
    title: "",
    description: "",
    price: 0,
    brand: "",
    category: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product.title.length > 3) {
      try {
        const res = await fetch("https://dummyjson.com/products/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });
        if (!res.ok) throw Error("something wrong with response!");
        const data: Product = await res.json();
        console.log(data);
        alert(`Pomyslnie utworzono produkt ${data.title}`);
      } catch (error) {
        console.log(error);
      }
    } else alert("za krótki tytuł!");
  };

  return {
    product,
    handleChange,
    handleSave,
  };
};
