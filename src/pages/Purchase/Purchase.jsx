import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../../components/UI/CommonSection";

import moment from "moment/moment";
import { useState } from "react";
import * as BillApi from "../../api/BillRequest";
import "./Cart.scss";

const Purchase = () => {
  const user = useSelector((state) => state.auth.authData);
  const [loading, setLoading] = useState(true);
  const [purchase, setPurchase] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      const { data } = await BillApi.getTimeLine(user.user._id);
      setPurchase(data);
      setLoading(false);
    };
    if (user) {
      fecthData();
    }
  }, [user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Cart">
      <CommonSection title="Đơn Hàng Đã Đặt" />

      {loading ? (
        <section>
          <h3 className="text-center">Đơn Đặt Hàng Trống</h3>
        </section>
      ) : purchase?.length > 0 ? (
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <table className="table ">
                  <thead>
                    <tr>
                      <th className="text-center">Ảnh</th>
                      <th className="text-center">Tên Sản Phẩm</th>
                      <th className="text-center">Giá</th>
                      <th className="text-center">Số Lượng</th>
                      <th className="text-center">Ngày Đặt</th>
                    </tr>
                  </thead>

                  {purchase?.map((item) => (
                    <tbody key={item?._id}>
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
                          <span className="mx-2">{item?.quantity}</span>
                        </th>
                        <th className="text-center">
                          <span className="time">
                            {moment(item?.createdAt).format("llll")}
                          </span>
                        </th>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        <section>
          <h3 className="text-center">Đơn Đặt Hàng Trống</h3>
        </section>
      )}
    </div>
  );
};

export default Purchase;
