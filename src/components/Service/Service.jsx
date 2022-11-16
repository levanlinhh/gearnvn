import React from "react";

import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import serviceData from "../../assets/data/serviceData";
import "./Service.scss";

const Service = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((service, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service__item"
                style={{ backgroundColor: `${service.bg}` }}
              >
                <span>
                  <i className={service.icon}></i>
                </span>
                <div className="">
                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
