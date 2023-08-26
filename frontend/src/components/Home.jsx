import React from "react";
// import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import products from "../products";
import HomeScreen from "../Screens/HomeScreen";
// import axios from "axios";
import Loader from "./Loader";
import Message from "./Message";
import { useGetProductsQuery } from "../Slice/productApiSlice";

// const Home = () => {
//   const [products, setproducts] = useState([]);
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data } = await axios.get("/api/product");
//       setproducts(data);
//     };
//     fetchProducts();
//   }, []);
//   return (
//     <>
// <h3 className="py-3">Latest Products</h3>
// <Container>
//   <Row>
//     {products.map((product) => (
//       <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//         <HomeScreen product={product} />
//       </Col>
//     ))}
//   </Row>
// </Container>
//     </>
//   );
// };

const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h3 className="py-3">Latest Products</h3>
          <Container>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <HomeScreen product={product} />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
