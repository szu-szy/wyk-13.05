import { Suspense, useEffect, useState } from "react";
import { useFetchData } from "./hooks/useFetchData";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: 94;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};

// ZADANIE
// STWORZENIE STANU ORAZ TYPU DLA USERA ORAZ TABLICY USEROW
// POBRANIE LISTY USEROW
// POBRANIE POJEDYNCZEGO USERA
// WYSWIETLENIE WYNIKU
// LINK DO API https://dummyjson.com/docs/users

// ZADANIE 2
// ZAKTUALIZOWANIE CART O PODANYM ID (DOWOLNE PROPERTKI)
// USUNIECIE CART O PODANYM ID
// DODANIE CART O PODANYCH WARTOSCIACH
// LINK DO API https://dummyjson.com/docs/carts

// ZADANIE 3
// STWÓRZ 2 HOOKI
// 1 - DO POBIERANIA POJEDYNCZEGO PRODUKTU
// 2 - DO USUWANIA UZYTKOWNIKA

const baseURL = 'https://dummyjson.com/products';

export const UserList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();

  const {isLoading, fetchData} = useFetchData<Product[]>();
  const {isLoading: singleProductLoading, fetchData: loadSingleItem} = useFetchData<Product>()

  const loadProducts = async () => {
    const res = await fetchData(baseURL);
    console.log(res);
    if(res?.data) setProducts(res.data)
  }

  const loadProduct = async () => {
    const res = await loadSingleItem(baseURL, 3);
    if(res?.data) setProduct(res.data);
  }

  // const addUser = async (user: User) => {
  //   try {
  //     setIsLoading(true);
  //     const data = await fetch(`https://dummyjson.com/users/add`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(user),
  //     });
  //     const dataJson = await data.json();
  //     if (!data.ok) throw Error("Cos poszło nie tak");
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const deleteUser = async (id: number) => {
  //   try {
  //     setIsLoading(true);
  //     const data = await fetch(`https://dummyjson.com/users/${id}`, {
  //       method: "DELETE",
  //     });
  //     const dataJson = await data.json();
  //     if (!data.ok) throw Error("Cos poszło nie tak");
  //     console.log(dataJson)
  //     alert('udało się usunąć!')
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const updateUser = async ({id, lastName}: User) => {
  //   try {
  //     setIsLoading(true);
  //     const data = await fetch(`https://dummyjson.com/users/${id}`, {
  //       method: "PUT",
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         lastName
  //       })
  //     });
  //     const dataJson = await data.json();
  //     if (!data.ok) throw Error("Cos poszło nie tak");
  //     console.log(dataJson)
  //     alert('udało się zaktualizować!')
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  useEffect(() => {
    loadProducts();
    // loadProduct();
    // addUser({
    //   firstName: "Muhammad",
    //   lastName: "Ovi",
    //   age: 250,
    // });
    // deleteUser(1);
    // updateUser({
    //   id: 1,
    //   firstName: "Muhammad",
    //   lastName: "Ovi123",
    //   age: 250,
    // })
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : products.length > 0 ? (
        <ul>
          {products.map(({ id, title, price }) => (
            <li key={id}>{`${title}- cena: ${price}`}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
