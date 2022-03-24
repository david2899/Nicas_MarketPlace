import * as Yup from "yup";

export function ValidationRegister() {
  return {
    FirstName: Yup.string().required("First Name cannot be empty"),
    LastName: Yup.string().required("LastName cannot be empty"),
    Email: Yup.string()
      .required("Email cannot be empty")
      .email("It has to be email type"),
    Password: Yup.string()
      .required("Password cannot be empty"),
    ConfirmPaswword: Yup.string()
      .required("Confirm Paswword cannot be empty")
      .oneOf([Yup.ref("Password")], "Passwords do not match"),
    termsPrivacy: Yup.array().min(
      1,
      "You have to accept the terms and privacy"
    ),
  };
}
