import { Product } from "../../App";
import { SearchProductForm } from "../SearchProductForm";
import "./ProductsList.scss";

type ProductsListProps = {
  list: Product[];
  handleSearchList: (searchTerm: string) => void;
};

export const ProductsList = ({ list, handleSearchList }: ProductsListProps) => {
  return (
    <>
      <SearchProductForm handleSearchList={handleSearchList} />
      <ul className="products-list">
        {list.map(({ id, title, brand, price, thumbnail }) => (
          <li className="products-list__item" key={id}>
            <img src={thumbnail} alt={`${title} thumbnail`} />
            <h3>{brand}</h3>
            <h2>{title}</h2>
            <h4>{price}</h4>
          </li>
        ))}
      </ul>
    </>
  );
};
