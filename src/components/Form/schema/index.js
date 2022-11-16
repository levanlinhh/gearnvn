import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const userSechema = yup.object().shape({
  username: yup.string().required("field is required"),
  email: yup
    .string()
    .email("Vui lòng nhập email hợp lệ")
    .required("field is required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Vui lòng tạo 1 chữ cái viết hoa, 1 chữ cái viết thường, 1 chữ số",
    })
    .required("field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null, "Mật khẩu chưa đúng"])
    .required("Field is required"),
});
