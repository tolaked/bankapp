import React from "react";
import { Link } from "react-router-dom";
import BankApp from "src/assets/BankApp.png";
import { Button, Input, Password } from "src/components/fields";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import authService from "src/services/auth.service";
import cogoToast from "cogo-toast";
import { saveUser } from "src/utils";
import { useNavigate } from "react-router-dom";
import routeService from "src/services/route.service";
import jwtDecode from "jwt-decode";

function Login() {
  const navigate = useNavigate();

  const initialValues = { emailAddress: "", password: "" };
  const validationSchema = Yup.object().shape({
    emailAddress: Yup.string().email().required("This field is required"),
  });
  return (
    <Formik
      onSubmit={(values) => {
        console.log("got here to submit");
        authService
          .login(values)
          .then((res) => {
            const user = jwtDecode(res?.data);
            saveUser(user, res?.data);
            navigate(routeService.dashboard);
            cogoToast.success("User Logged in successfully!");
          })
          .catch((e) => {
            console.log("e", e);
            cogoToast.error(
              e?.response?.data?.message ||
                "An Error occurred trying to log you in!!"
            );
          });
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ values, errors, isSubmitting, isValid }) => {
        console.log("values", values, errors, isSubmitting, isValid);
        return (
          <Form>
            <div className="p-4">
              <img src={BankApp} alt="logo" />
            </div>
            <div className="max-w-lg m-auto my-5 shadow-lg p-10">
              <p className="">Login</p>
              <div>
                <Input type="email" name="emailAddress" />
                <Password name="password" />
                {/*<input placeholder="Email" type="text" style={inputbox} />*/}
                {/*<input placeholder="Password" type="password" style={inputbox} />*/}
                <Button type="submit" disabled={!(isValid || isSubmitting)}>
                  Login
                </Button>
              </div>
              <p>
                Don't have an account? <Link to="/"> Register here</Link>
              </p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Login;
