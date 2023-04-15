import React from "react";
import "./Products.css";
import { productsDetails } from "./productsdetails";

const Products = () => {
  return (
    <div className="products">
      <div className="filterBox">
        <h2>Products</h2>
        <div>
          <button>Filter</button>
        </div>
      </div>
      <div className="allTapes">
        {productsDetails.map((tapes, index) => {
          return (
            <div key={index} className="tape">
              <div className="tapeImg">
                <img src={tapes.imgLink} alt={tapes.name} />
                <h3>{tapes.name}</h3>
              </div>
              <div className="tapeInfo">
                {tapes.productType ? (
                  <p>
                    <b>Product Type:</b> {tapes.productType}
                  </p>
                ) : (
                  ""
                )}
                {tapes.color ? (
                  <p>
                    <b>Color:</b> {tapes.color}
                  </p>
                ) : (
                  ""
                )}
                {tapes.length ? (
                  <p>
                    <b>Length:</b> {tapes.length}
                  </p>
                ) : (
                  ""
                )}
                {tapes.width ? (
                  <p>
                    <b>Width:</b> {tapes.width}
                  </p>
                ) : (
                  ""
                )}
                {tapes.productType ? (
                  <p>
                    <b>Product Type:</b> {tapes.productType}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <button>Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
