import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Pclist from "./Pclist";



class ApiManager {
  constructor() {
    this.data = [...Pclist];
    this.filter = [...Pclist];
    this.loading = false;
    this.componentMounted = true;
  }

  async getProducts() {
    this.loading = true;
    // Simulate an API call delay (remove this in a real application)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.data = [...Pclist];
    this.filter = [...Pclist];
    this.loading = false;
  }

  filterProducts(category) {
    this.filter = this.data.filter((product) => product.category === category);
  }

  componentWillUnmount() {
    this.componentMounted = false;
  }
}

const Products = () => {
  const apiManager = new ApiManager();

  useEffect(() => {
    apiManager.getProducts();

    return () => {
      apiManager.componentWillUnmount();
    };
  }, []);

  const Loading = () => {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };


  const ShowProducts = () => {
    return (
      <>


        <Row xs={1} md={3} className="g-4">
          {apiManager.filter.map((product) => (
            <Col key={product.id}>
              <Card
                className="h-auto w-auto border-0 mb-3"
                style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              >
                {/* Adjust the image source based on your product data */}
                <Card.Img variant="top" src={product.img} height={"auto"} width={"100px"}/>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title className="mb-2">
                    {product.title.substring(0, 24)}...
                  </Card.Title>
                  <Card.Text className="mb-2">MAD {product.price}</Card.Text>
                  <NavLink to={`/products/${product.id}`}>
                    <Button variant="outline-dark">Add to Cart</Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {apiManager.loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
