import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import AuthOptions from "../../components/auth/AuthOptions";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormElement, Input } from "../../styles/form";
import PasswordInput from "../../components/auth/PasswordInput";
import { Link } from "react-router-dom";
import { BaseButtonBlack } from "../../styles/button";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const SignInScreenWrapper = styled.section`
  .form-separator {
    margin: 32px 0;
    column-gap: 18px;

    @media (max-width: ${breakpoints.lg}) {
      margin: 24px 0;
    }

    .separator-text {
      border-radius: 50%;
      min-width: 36px;
      height: 36px;
      background-color: ${defaultTheme.color_purple};
      position: relative;
    }

    .separator-line {
      width: 100%;
      height: 1px;
      background-color: ${defaultTheme.color_platinum};
    }
  }

  .form-elem-text {
    margin-top: -16px;
    display: block;
  }
`;

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required('Username or email is required'),
  password: Yup.string().required('Password is required'),
});

const SignInScreen = () => {

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch('login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        // Login successful, handle accordingly (e.g., redirect to dashboard)
        console.log('Login successful');
      } else {
        // Login failed, handle error (e.g., display error message)
        const data = await response.json();
        setErrors({ general: data.message }); // Assuming the API returns error message in a field named "message"
      }
    } catch (error) {
      console.error('Error occurred:', error);
      // Handle error
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <SignInScreenWrapper>
      <Formik
        initialValues={{ usernameOrEmail: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormElement>
              <label htmlFor="usernameOrEmail" className="form-elem-label">
                User name or email address
              </label>
              <Field
                type="text"
                name="usernameOrEmail"
                className="form-elem-control"
              />
              <ErrorMessage name="usernameOrEmail" component="div" className="error" />
            </FormElement>

            <FormElement>
              <label htmlFor="password" className="form-elem-label">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="form-elem-control"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </FormElement>

            <Link to="/reset" className="form-elem-text text-end font-medium">
              Forgot your password?
            </Link>

            <BaseButtonBlack type="submit" disabled={isSubmitting} className="form-submit-btn">
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </BaseButtonBlack>

            <ErrorMessage name="general" component="div" className="error" />

            <p className="flex flex-wrap account-rel-text">
              Don&apos;t have an account?{' '}
              <Link to="/sign_up" className="font-medium">
                Sign Up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </SignInScreenWrapper>
  );
};

export default SignInScreen;
