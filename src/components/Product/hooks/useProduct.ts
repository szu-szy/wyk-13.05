import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product as ProductType } from "../../../App";

type UseProductData = {
  product: ProductType;
  isLoading: boolean;
  isReadOnly: boolean;
  handleDelete: () => void;
  handleSave: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEdit: () => void;
}

export const useProduct = (): UseProductData => {
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

  return {
    product,
    isLoading,
    isReadOnly,
    handleDelete,
    handleSave,
    handleChange,
    handleEdit
  }
}