import { Formik, Form, Field } from "formik"
import React, { useState} from "react"
import * as yup from "yup"
import { setUserDetails } from "../../redux/reducerSlices/userSlice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const loginSchema = yup.object().shape({
  phoneNumber: yup.string().min(10, { message: "Invalid Number"}).required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
});


const Login = () =>  {
  const dispatch = useDispatch();
  const router = useRouter();
  const [responseMsg, setResponseMsg] = useState({ msgLabel: "", msgType: "" });
  const handleLogin = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (result.success) {
        dispatch(setUserDetails(result));
        setResponseMsg({
          msgLabel: "Login successful, Welcome!",
          msgType: "success",
        });
        router.push("/");
      } else {
        setResponseMsg({ msgLabel: result.msg, msgType: "error" });
      }
    } catch (error) {
      setResponseMsg({ msgLabel: "error.msg", msgType: "error" });
      console.error("Error posting data:", error);
    }
  };




  
  return (
    <div>
      <h1>Login</h1>
      <Formik
      initialValues={{
        phoneNumber: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        handleLogin(values);
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
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default Login