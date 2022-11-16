import React, { useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import CommonSection from "../../components/UI/CommonSection";

import { cartActions } from "../../redux/slice/cartSlice";
import "./Cart.scss";

const Cart = () => {
  const productCart = useSelector((state) => state.cart.cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        image: item.image,
        price: item.price,
      })
    );

    toast.success("Thêm Sản Phẩm Thành Công!!");
  };

  const decreaseItem = (id) => {
    dispatch(cartActions.decreaseItem(id));
  };
  const deleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));

    toast.success("Xóa Sản Phẩm Thành Công!!");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Cart">
      <CommonSection title="Thông Tin Đơn Hàng" />

      {productCart?.length > 0 ? (
        <section>
          <Container>
            <Row>
              <Col lg="9">
                <table className="table ">
                  <thead>
                    <tr>
                      <th className="text-center">Ảnh</th>
                      <th className="text-center">Tên Sản Phẩm</th>
                      <th className="text-center">Giá</th>
                      <th className="text-center">Số Lượng</th>
                      <th className="text-center">Xóa</th>
                    </tr>
                  </thead>

                  {productCart?.map((item) => (
                    <tbody key={item.id}>
                      <tr>
                        <th className="text-center">
                          <img
                            className="image"
                            src={item.image}
                            alt="imageProduct"
                          />
                        </th>
                        <th className="text-center">
                          <span>{item.productName}</span>
                        </th>
                        <th className="text-center">
                          <span>{item.price} VNĐ</span>
                        </th>
                        <th className="text-center">
                          <span
                            disabled
                            onClick={() =>
                              item.quantity > 1 ? decreaseItem(item.id) : {}
                            }
                          >
                            <BiMinus className="icon" />
                          </span>

                          <span className="mx-2">{item.quantity}</span>

                          <span onClick={() => addItem(item)}>
                            <BiPlus className="icon" />
                          </span>
                        </th>
                        <th className="text-center">
                          <RiDeleteBinLine
                            className="delete"
                            onClick={() => deleteItem(item.id)}
                          />
                        </th>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </Col>
              <Col lg="3" className="box__checkout">
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fs-5">Tổng</h6>
                  <span className="fw-bold fs-4">{totalAmount} VNĐ</span>
                </div>
                <p className="fs-6 mt-2">
                  Vui lòng kiểm tra kĩ trước khi thanh toán !!
                </p>
                <div>
                  <Link to={"/shop"}>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="shop__btnn w-100"
                    >
                      Tiếp Tục Mua Hàng
                    </motion.button>
                  </Link>
                  <Link to={"/checkout"}>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className="shop__btnn w-100"
                    >
                      Thanh Toán
                    </motion.button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        <section>
          <h3 className="text-center">Giỏ hàng đang trống</h3>
        </section>
      )}
    </div>
  );
};

export default Cart;
