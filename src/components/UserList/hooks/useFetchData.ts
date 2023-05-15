import { useState } from "react";
import { Product } from "..";

type PromiseType<T> = {
  data: T;
}

type FetchDataType<T> = {
  isLoading: boolean;
  fetchData: (url: string, id?: number) => Promise<PromiseType<T> | undefined>;
}

export const useFetchData = <T>(): FetchDataType<T> => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url: string, id?: number) => {
    try {
      setIsLoading(true);
      const data = await fetch(`${url}/${id ?? ''}`);
      const dataJson: PromiseType<T> = await data.json();
      if (!data.ok) throw Error("Cos poszło nie tak");
      return dataJson;
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    fetchData
  }
}