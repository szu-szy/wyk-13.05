import { Product } from "../../App"
import './ProductsList.scss';

type ProductsList = {
  list: Product[];
}

export const ProductsList = ({list}: ProductsList) => {

  return (
    <ul className="products-list">
      {list.map(({id, title, brand, price, thumbnail}) => (
        <li className="products-list__item" key={id}>
          <img src={thumbnail} alt={`${title} thumbnail`} />
          <h3>{brand}</h3>
          <h2>{title}</h2>
          <h4>{price}</h4>
        </li>
      ))}
    </ul>
  )
}