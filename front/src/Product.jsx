import React from "react";
import { PiCoffee } from "react-icons/pi";
import { FaBath } from "react-icons/fa6";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { IoWifi } from "react-icons/io5";
import { TbToolsKitchen3 } from "react-icons/tb";
import { BsPlug } from "react-icons/bs";
import { PiLockers } from "react-icons/pi";
import { BsFillHexagonFill } from "react-icons/bs";
const Product = () => {
  return (
    <>
      <div className="product-main">
        <div className="container">
          <div className="product-inner">
            <div className="product-title">
                <h3>
                what we offer
                </h3>
            </div>
            <div className="product-info">
            <div className="product-cln">
              <div className="product-icon">
                <PiCoffee  className="i"/>
                <BsFillHexagonFill className="hexa" />
              </div>
              <h5 className="title">
                <a href="#">Tea & Coffee</a>
              </h5>
              <p className="product-detail">
                You can always have some hot coffee & tea in our kitchen,
                available to all our clients.
              </p>
            </div>
            <div className="product-cln">
              <div className="product-icon">
                <FaBath className="i"/>
                <BsFillHexagonFill className="hexa" />
              </div>
              <h5 className="title">
                <a href="#">Tea & Coffee</a>
              </h5>
              <p className="product-detail">
                You can always have some hot coffee & tea in our kitchen,
                available to all our clients.
              </p>
            </div>
            <div className="product-cln">
              <div className="product-icon">
                <MdOutlineLocalLaundryService className="i"/>
                <BsFillHexagonFill className="hexa" />
              </div>
              <h5 className="title">
                <a href="#">Tea & Coffee</a>
              </h5>
              <p className="product-detail">
                You can always have some hot coffee & tea in our kitchen,
                available to all our clients.
              </p>
            </div>
            <div className="product-cln">
              <div className="product-icon">
                <TbAirConditioning className="i"/>
                <BsFillHexagonFill className="hexa" />
              </div>
              <h5 className="title">
                <a href="#">Tea & Coffee</a>
              </h5>
              <p className="product-detail">
                You can always have some hot coffee & tea in our kitchen,
                available to all our clients.
              </p>
            </div>
            <div className="product-cln">
              <div className="product-icon">
                <IoWifi  className="i" />
                <BsFillHexagonFill className="hexa" />
              </div>
              <h5 className="title">
                <a href="#">Tea & Coffee</a>
              </h5>
              <p className="product-detail">
                You can always have some hot coffee & tea in our kitchen,
                available to all our clients.
              </p>
            </div>
            <div className="product-cln">
              <div className="product-icon">
                <TbToolsKitchen3  className="i" />
                <BsFillHexagonFill className="hexa" />
              </div>
              <h5 className="title">
                <a href="#">Tea & Coffee</a>
              </h5>
              <p className="product-detail">
                You can always have some hot coffee & tea in our kitchen,
                available to all our clients.
              </p>
            </div>
            <div className="product-cln">
              <div className="product-icon">
                <BsPlug className="i"/>
                <BsFillHexagonFill className="hexa" />
              </div>
              <h5 className="title">
                <a href="#">Tea & Coffee</a>
              </h5>
              <p className="product-detail">
                You can always have some hot coffee & tea in our kitchen,
                available to all our clients.
              </p>
            </div>
            <div className="product-cln">
              <div className="product-icon">
                <PiLockers className="i"/>
                <BsFillHexagonFill className="hexa" />
              </div>
              <h5 className="title">
                <a href="#">Tea & Coffee</a>
              </h5>
              <p className="product-detail">
                You can always have some hot coffee & tea in our kitchen,
                available to all our clients.
              </p>
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
