import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import Silder from "../../components/Slider/Slider";
import "./Home.scss";
import Service from "../../components/Service/Service";
import ProductList from "../../components/UI/ProductList";
import products from "../../assets/data/products";
import { useState } from "react";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
const Home = () => {
  const [dataTrending, setDataTrending] = useState([]);
  const [dataBestSales, setDataBestSales] = useState([]);
  const [dataMobiles, setDataMobiles] = useState([]);
  const [dataPopular, setDataPopular] = useState([]);
  const [dataMount, setDataMount] = useState([]);

  // const year = new Date().getFullYear();

  useEffect(() => {
    const productTrending = products.filter(
      (item) => item.category === "iphone"
    );
    const productBestSales = products.filter(
      (item) => item.category === "mount"
    );
    const productMobiles = products.filter(
      (item) => item.category === "iphone" || item.category === "dienthoai"
    );
    const productPopular = products.filter(
      (item) => item.category === "laptop"
    );
    const productMount = products.filter(
      (item) => item.category === "clock"
    );
    setDataTrending(productTrending);
    setDataBestSales(productBestSales);
    setDataMobiles(productMobiles);
    setDataPopular(productPopular);
    setDataMount(productMount);

  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Home">
      {/* <section className="hero__section">
      <Slider/> 
      </section> */}
      <Silder/>
        <Service />

      <section className="trending__product">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Sản Phẩm Bán Chạy</h2>
            </Col>
            <ProductList data={dataTrending} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Đang Sales</h2>
            </Col>
            <ProductList data={dataBestSales} />
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Điện Thoại Chính Hãng</h2>
            </Col>
            <ProductList data={dataMobiles} />
          </Row>
        </Container>
      </section>
      <section className="popular">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Lap Top Chính Hãng</h2>
            </Col>
            <ProductList data={dataPopular} />
          </Row>
        </Container>
      </section>
      <section className="popular">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Đồng Hồ Thông Minh</h2>
            </Col>
            <ProductList data={dataMount} />
          </Row>
        </Container>
      </section>
      <section className="popular">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h2>
            </Col>
            <ProductList data={dataMobiles} />
          </Row>
        </Container>
      </section>
      <ScrollToTop smooth />
    </div>
  );
};

export default Home;
