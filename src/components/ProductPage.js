import React from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import { productsDetails } from "./productsdetails";

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div className="productDetails">
      {productsDetails.map((prod) => {
        if (prod.productId == productId)
          return (
            <div className="productCard" key={productId}>
              <h2>{prod.name}</h2>
              <div className="productInfoContainer">
                <div className="productImg">
                  <img src={prod.imgLink} alt={prod.name} />
                </div>
                <div className="productInfo">
                  {prod.productType ? (
                    <p>
                      <b>Product Type: </b>
                      {prod.productType}
                    </p>
                  ) : null}
                  {prod.material ? (
                    <p>
                      <b>Material: </b>
                      {prod.material}
                    </p>
                  ) : null}
                  {prod.length ? (
                    <p>
                      <b>Length: </b>
                      {prod.length}
                    </p>
                  ) : null}
                  {prod.width ? (
                    <p>
                      <b>Width: </b>
                      {prod.width}
                    </p>
                  ) : null}
                  {prod.color ? (
                    <p>
                      <b>Color: </b>
                      {prod.color}
                    </p>
                  ) : null}
                  {prod.adhesiveSide ? (
                    <p>
                      <b>Adhesive Side: </b>
                      {prod.adhesiveSide}
                    </p>
                  ) : null}
                  {prod.features ? (
                    <div className="features">
                      <p>
                        <b>Features: </b>
                      </p>
                      <ul>
                        {prod.features.map((pts, i) => (
                          <li key={i}>{pts}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {prod.use ? (
                    <p>
                      <b>Use Case: </b>
                      {prod.use}
                    </p>
                  ) : null}
                  {prod.supplyAbility ? (
                    <p>
                      <b>Supply Ability: </b>
                      {prod.supplyAbility}
                    </p>
                  ) : null}
                  {prod.description ? (
                    <p>
                      <b>Description: </b>
                      {prod.description}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          );
          else return null;
      })}
    </div>
  );
};

export default ProductPage;
