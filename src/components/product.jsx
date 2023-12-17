import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/Actions";
import { Link } from "react-router-dom";
import Pclist from "./Pclist";
import ProcIcon from './assets/svg/Processeur.svg'
import Case from './assets/svg/Boitier.svg'
import GraphicCard from './assets/svg/Carte-Graphique.svg'
import Storage from './assets/svg/Stockage.svg'
import MotherBoard from './assets/svg/Carte-Mere.svg'
import PowerSupply from './assets/svg/PSU.svg'
import Ram from './assets/svg/RAM.svg'


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = () => {
      const selectedProduct = Pclist.find((item) => item.id === parseInt(id, 10));

      if (selectedProduct) {
        setProduct(selectedProduct);
        setLoading(false);
      } else {
        console.error("Product not found");
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
    <>
      <div className="w-full d-flex justify-content-center mt-4">
        <div className="col-md-6">
          <div className="border-0">
            <img src={product.img} alt="Product" height="auto" width="300" />
          </div>
        </div>
        <div className="col-md-6">
          <h4>{product.category}</h4>
          <p className="fw-bold">{product.title}</p>
          <p>{product.description}</p>
          <h3 className="display-6 fw-bold me-3 ">MAD
           {product.price}</h3>
          <div className="col-m-12">
            <Button
              variant="outline-primary "
              className="col-md-5 me-2 mb-2"
              onClick={() => addProductToCart(product)}
            >
              Add to Cart
            </Button>
            <Link as={Link} to="/Products">
      

            <Button variant="secondary " className="col-md-5 me-2 mb-2">
              <i className="fa fa-shopping-cart me-1 w-full "></i> Continue Shopping
            </Button>
            </Link>
          </div>
  
          {/* Display Specifications in two columns with custom styling */}
        </div>
      </div>
      <hr className="my-4" />

      <div className="my-4 ">
            <h5>Specifications:</h5>
            <div className="d-flex justify-content-center ">
              <div className="col-6 ">
                <ul className="list-unstyled">
                  <li className="fw-bold">
                    <img src={ProcIcon} alt="" className="me-2" />
                    <span className="text-danger">Processor:</span> <br />{product.specs.processor}
                  </li><br />
                  <li className="fw-bold">
                    <img src={GraphicCard} alt="" className="me-2" />
                    <span className="text-danger">Graphics Card:</span> <br />{product.specs.graphicsCard}
                  </li><br />
                  <li className="fw-bold">
                    <img src={MotherBoard} alt="" className="me-2" />
                    <span className="text-danger">Motherboard:</span> <br />{product.specs.motherboard}
                  </li><br />
                  <li className="fw-bold">
                    <img src={Ram} alt="" className="me-2" />
                    <span className="text-danger">RAM:</span> <br />{product.specs.ram}
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="fw-bold">
                    <img src={Case} alt="" className="me-2" />
                    <span className="text-danger">Case:</span> <br />{product.specs.case}
                  </li> <br />
                  <li className="fw-bold">
                    <img src={Storage} alt="" className="me-2" />
                    <span className="text-danger">Storage SSD:</span> <br />{product.specs.storageSSD}
                  </li> <br />
                  <li className="fw-bold">
                    <img src={PowerSupply} alt="" className="me-2" />
                    <span className="text-danger">Power Supply:</span> <br />{product.specs.powerSupply}
                  </li>
                </ul>
              </div>
            </div>
          </div>


      </>
    );
  };    
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
