import * as UserApi from "../api/UserRequest";
import { authActions } from "../redux/slice/authSlice";
import { toast } from "react-toastify";

export const updateUser = (id, formData) => async (dispatch) => {
  dispatch(authActions.UPDATE_START());

  try {
    const { data } = await UserApi.updateUser(id, formData);
    dispatch(authActions.UPDATE_SUCCESS(data));
    toast.success("Cập nhật thành công !!");
  } catch (err) {
    dispatch(authActions.UPDATE_FAIL());
  }
};
