import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const { product, showButton } = props;
  return (
    <div className="card h-100"> {/* Added h-100 class to set card height */}
      <img
        src={product.image}
        className="card-img-top img-fluid"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column"> {/* Added d-flex and flex-column classes */}
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text description-scroll flex-grow-1">{product.description}</p> {/* Added flex-grow-1 class */}
        <p className="card-price">Price: {product.price}$</p>
        {showButton && (
          <Link to={`/product/${product.id}`} className="btn btn-primary">
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

export default Product;
