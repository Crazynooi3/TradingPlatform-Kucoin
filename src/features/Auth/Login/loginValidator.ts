import * as Yup from "yup";

export const emailValidator = Yup.object({
  identifier: Yup.string()
    .required("Email / Phone Number required")
    .test("email-or-phone", "Invalid Email / PhoneNumber", (value) => {
      if (!value) return false;
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      const isPhone = /^(\+98|0)?9\d{9}$/.test(value);
      return isEmail || isPhone;
    }),
});

export const tokenValidator = Yup.object({
  identifier: Yup.string().required("Token is required"),
});
