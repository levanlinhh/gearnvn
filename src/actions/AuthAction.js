import * as AuthApi from "../api/AuthRequest";
import { authActions } from "../redux/slice/authSlice";
import { toast } from "react-toastify";

export const logIn = (formData) => async (dispatch) => {
  dispatch(authActions.AUTH_START());
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch(authActions.AUTH_SUCCESS(data));
    toast.success("Đăng nhập thành công !!");
  } catch (error) {
    toast.error(error.response.data);
    dispatch(authActions.AUTH_FAIL());
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch(authActions.AUTH_START());
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch(authActions.AUTH_SUCCESS(data));
    toast.success("Đăng ký thành công !!");
  } catch (error) {
    console.log(error.response.data);
    toast.error(error.response.data.message);

    dispatch(authActions.AUTH_FAIL());
  }
};

export const logout = () => async (dispatch) => {
  toast.success("Đăng xuất thành công!!");
  dispatch(authActions.LOG_OUT());
};
