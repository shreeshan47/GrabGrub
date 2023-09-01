import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const basicSchema = yup.object().shape({
  phoneNumber: yup.string().min(10).required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const userSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username must be at least 3 characters long")
      .required("Required"),
    jobType: yup
      .string()
      .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
      .required("Required"),
    acceptedTos: yup
      .boolean()
      .oneOf([true], "Please accept the terms of service"),
  });