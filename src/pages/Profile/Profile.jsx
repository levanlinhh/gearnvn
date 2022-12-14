import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import * as UserApi from "../../api/UserRequest.js";
import CommonSection from "../../components/UI/CommonSection";

import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.scss";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase.config";

import { updateUser } from "../../actions/userAction";
import user_icon from "../../assets/images/user-icon.png";

const Profile = () => {
  const user = useSelector((state) => state.auth.authData);
  const [profile, setProfile] = useState(user?.user);
  const [isLodaing, setIsLoading] = useState(false);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    const fetchProfileUser = async () => {
      const profileUser = await UserApi.getUser(user.user._id);
      setProfile(profileUser.data);
    };

    if (user) {
      fetchProfileUser();
    }
  }, [user]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const upLoadImage = async (e) => {

    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setIsLoading(false);
          setProfile({
            ...profile,
            profileImage: downloadURL,
          });
        });
      }
    );
  };

  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(user.user._id, profile));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="profile">
      <CommonSection title="Trang C?? Nh??n" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3" className="box-image">
              {isLodaing ? (
                <span>??ang t???i...</span>
              ) : (
                <img
                  src={
                    profile?.profileImage ? profile?.profileImage : user_icon
                  }
                  alt="iconUser"
                  className="imageUser"
                />
              )}

              <input
                type="file"
                name="file"
                id="file"
                className="inputfile"
                onChange={upLoadImage}
              />
              <label htmlFor="file">C???p nh???t ???nh ?????i di???n</label>
              <p>Vui l??ng ch???n ???nh ?????i di???n m???i !!</p>
            </Col>
            <Col lg="9" md="6">
              <h4 className="text-center">Th??ng Tin Kh??ch H??ng</h4>
              <form className="form">
                <div className="form__group">
                  <span>T??n Kh??ch H??ng</span>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={profile.username}
                  />
                </div>
                <div className="form__group">
                  <span>S??? ??i???n Tho???i</span>

                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={profile.phone}
                  />
                </div>
                <div className="form__group">
                  <span>??i??? Ch???</span>

                  <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    value={profile.address}
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="button"
                  onClick={handleUpdate}
                >
                  {loading ? "??ang x??? l??..." : "L??u"}
                </motion.button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Profile;
