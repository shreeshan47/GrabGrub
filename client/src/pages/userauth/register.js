import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const regsitrationSchema = yup.object().shape({
  phoneNumber: yup.string().min(10, { message: "Invalid Number"}).required("Required"),
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

const Registration = () => {
  const [responseMsg, setResponseMsg] = useState({ msgLabel: "", msgType: "" });
  const registerUser = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (response.status) {
        setResponseMsg({
          msgLabel: result.msg,
          msgType: response.status == 409 ? "error" : "success",
        });
        console.log("Success posting data:", response.status )
      }
    } catch (error) {
      setResponseMsg({ msgLabel: "Something went wrong", msgType: "error" });
      console.error("Error posting data:", error);
    }
  };


return(
  <div>
    <h1>Register</h1>
    <Formik
      initialValues={{
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={regsitrationSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        registerUser(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="phoneNumber">phone Number</label>
          <Field name="phoneNumber" placeholder="enter phonenumber" />
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}
          <br />
          <label htmlFor="password">password</label>
          <Field name="password"  type="password" placeholder="enter password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field name="confirmPassword" type="password" placeholder="confirmPassword" />
          {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)
};

export default Registration;