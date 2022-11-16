import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import products from "../../assets/data/products";
import CommonSection from "../../components/UI/CommonSection";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ProductDetail.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slice/cartSlice";
import { useState } from "react";
import ProductList from "../../components/UI/ProductList";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    avgRating,
    category,
    description,
    imgUrl,
    price,
    productName,
    reviews,
    shortDesc,
  } = product;

  const dispatch = useDispatch();
  const [isDesc, setIsDesc] = useState(true);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id: id,
        productName: productName,
        image: imgUrl,
        price: price,
      })
    );

    toast.success("Thêm Sản Phẩm Thành Công!!");
  };

  const typeProducts = products.filter((item) => item.category === category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <div className="Product__detail">
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6" className="Product__box">
              <div className="Product__info">
                <h2>{productName}</h2>
                <div className="Product__rating d-flex align-items-center gap-3">
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> đánh giá)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="price">Giá  {price} VNĐ</span>
                  <span className="category">Loại Sản Phẩm: {category}</span>
                </div>
                <p className="my-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="buy__btn"
                  onClick={addItem}
                >
                  Thêm Sản Phẩm
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center justify-content-center gap-5">
                <h6
                  className={isDesc ? "tab__active" : ""}
                  onClick={() => setIsDesc(!isDesc)}
                >
                  Mô tả
                </h6>
                <h6
                  className={isDesc ? "" : "tab__active"}
                  onClick={() => setIsDesc(!isDesc)}
                >
                  Đánh Giá ({reviews.length})
                </h6>
              </div>

              {isDesc ? (
                <div className="tab__content mt-4">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul className="p-0">
                      {reviews.map((item, idx) => (
                        <li key={idx}>
                          <h6>Khách Hàng Lĩnh Đã Mua</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h5>Viết Mô Tả Kèm Đánh Giá Sản Phẩm</h5>
                      <form>
                        <div className="form__group">
                          <input type="text" placeholder="Tên khách hàng..." />
                        </div>

                        <div className="form__group">
                          <span>
                            1<i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            2<i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            3<i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            4<i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            5<i className="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <div className="form__group ">
                          <textarea
                            rows={4}
                            type="text"
                            placeholder="Nội dung đánh giá... "
                          />
                        </div>

                        <div className="form__group d-flex justify-content-end">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="btn__send"
                          >
                            Gửi
                          </motion.button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProductDetail;
