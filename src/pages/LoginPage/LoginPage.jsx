import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { apiUserLogin } from "../../redux/auth/operations";
import { selectUserIsLoggedIn } from "../../redux/auth/selectors";
import * as Yup from "yup";
import css from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const INITIAL_VALUES = {
    email: "",
    password: "",
  };

  const registerSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Required"),
    password: Yup.string()
      .min(7, "Too Short! Password must be at least 7 characters")
      .required("Required"),
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (values, actions) => {
    dispatch(apiUserLogin(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <div className={css.contactForm}>
            <Form>
              <label htmlFor="email" className={css.formLabel}>
                Email
              </label>
              <Field type="text" name="email" className={css.formField} />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
              <label htmlFor="password" className={css.formLabel}>
                Password
              </label>
              <Field
                type="password"
                name="password"
                className={css.formField}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.error}
              />
              <button type="submit" className={css.submitButton}>
                Sign in
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
