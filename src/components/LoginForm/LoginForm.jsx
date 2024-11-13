import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { login } from "../../redux/auth/operations";
import { selectUserIsLoggedIn } from "../../redux/auth/selectors";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const INITIAL_VALUES = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <div className={css.LoginFormWrapper}>
            <Form className={css.LoginForm}>
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

export default LoginForm;
