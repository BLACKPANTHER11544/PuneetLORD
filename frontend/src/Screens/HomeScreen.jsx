import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const HomeScreen = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/api/product/${product._id}`}>
          <Card.Img
            src={product.image}
            variant="top"
            style={{ width: "540", height: "540" }}
          />
        </Link>
        <Card.Body>
          <Link to={`/api/product/${product._id}`}>
            <Card.Title as="div" className="product-title">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} Reviews`}
            />
          </Card.Text>
          <Card.Text as="div">&#8377; {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeScreen;
