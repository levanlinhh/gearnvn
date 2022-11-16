import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as BillApi from "../../api/BillRequest";

import CommonSection from "../../components/UI/CommonSection";
import "./Checkout.scss";
import { cartActions } from "../../redux/slice/cartSlice";

const Checkout = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartOder = useSelector((state) => state.cart.cartItem);
  const user = JSON.parse(localStorage.getItem("profile")) || undefined;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const order = async () => {
    if (user) {
      if (cartOder.length > 0) {
        cartOder.forEach(async (item) => {
          await BillApi.createBill({
            userId: user.user._id,
            productId: item.id,
            image: item.image,
            price: item.price,
            productName: item.productName,
            quantity: item.quantity,
            totalPrice: item.totalPrice,
          });
        });
        toast.success("Đặt hàng thành công!!");
        dispatch(cartActions.deleteAll());
      } else {
        toast.warn("Giỏ hàng trống, Vui lòng mua sản phẩm");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="checkout">
      <CommonSection title="Thanh Toán" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6>Thông tin thanh toán</h6>
              <form>
                <div className="form__group">
                  <li className="title">Tên khách hàng:</li>
                  <span>{user?.user?.username}</span>
                </div>
                <div className="form__group">
                  <li className="title">Email:</li>
                  <span>{user?.user?.email}</span>
                </div>
                <div className="form__group">
                  <li className="title">Số điện thoại:</li>
                  <span>{user?.user?.phone}</span>
                </div>
                <div className="form__group">
                  <li className="title">Địa Chỉ:</li>
                  <span>{user?.user?.address}</span>
                </div>
              </form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Tổng Số Lượng:</h6>
                  <span>{totalQuantity}</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Thành Tiền: </h6>
                  <span>{totalAmount} VNĐ</span>
                </div>
                <div className="total d-flex align-items-center justify-content-between">
                  <h6>Tiền Cần Thanh Toán:</h6> <span>{totalAmount} VNĐ</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="buy__btn"
                  onClick={order}
                >
                  Đặt Hàng
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
