import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../actions/AuthAction";
import "./Login.scss";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loading = useSelector((state) => state.auth.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(logIn(data));
      const user = JSON.parse(localStorage.getItem("profile"));
      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Login">
      <section>
        <Container>
          <Row>
            <Col lg="4" className="m-auto text-center">
              <h2 className="mb-4 fw-bold">Đăng Nhập</h2>
              <div className="login__box">
                <form action="">
                  <div className="form__group">
                    <input
                      value={data.email}
                      type="text"
                      placeholder="email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      value={data.password}
                      type="password"
                      placeholder="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    className="login__btn"
                    onClick={onLogin}
                    disabled={loading}
                  >
                    {loading ? "Đang xử lý..." : "Đăng Nhập"}
                  </motion.button>
                  <p>
                    Chưa có tài khoản?{" "}
                    <Link to={"/signup"}>Tạo tài khoản mới ?</Link>{" "}
                  </p>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Login;
