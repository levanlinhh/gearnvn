import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <h1 className="text-back">GEAR VN</h1>
            </div>
            <p className="footer__text mt-4">
            GEARVN là doanh nghiệp chuyên cung cấp thiết bị, giải pháp về máy tính, 
            thiết bị chơi game, thiết bị công nghệ cao cấp hàng đầu Việt Nam.
            </p>
          </Col>
          <Col lg="3" className="mb-4" md="3">
            <div className="footer__quick-link">
              <h4 className="quick-link-title text-back">Chính sách tại GEARVN</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Chính sách bảo hành</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Chính sách giao hàng</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Chính sách trả góp</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Hướng dẫn thanh toán</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-link">
              <h4 className="quick-link-title text-back">Hotline hỗ trợ</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Gọi mua hàng: 19000909</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Gọi CSKH: 19001919</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Gọi Bảo Hành: 19009191</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Kỹ Thuật: 19009898</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-link">
              <h4 className="quick-link-title text-back">HỆ THỐNG CỬA HÀNG</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 d-flex gap-2">
                  <span className="icon">
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>Ho Chi Minh Viet Nam</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex gap-2">
                  <span className="icon">
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+84 927296995</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex gap-2">
                  <span className="icon">
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>gearnvn@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
