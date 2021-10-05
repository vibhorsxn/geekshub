import React from 'react'
import "../style/Login.css";
// import axios from 'axios';
import { Formik, Field, Form,ErrorMessage} from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';

const Login = ({setToken}) => {

  
  
  const initialValues={
    email:'',
    password:'',
    rememberMe:false
  }
  const validationSchema = Yup.object().shape({
    // email : Yup.string().email("Enter valid Email").required("Required"),
    email:Yup.string()
    .required("Required")
    .min(3, "Too short Name"),

    password: Yup.string().min(8, "Password minimum length should be 8").required("Required")
    //.matches(/'^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$'/, "Password must contain a number."),

    // rememberMe: Yup.string().oneOf(["true"], "Accept terms & conditions")
  })

  const onSubmit=(values,props)=>{
    console.log(values);
    
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
      };
    
      // API implementation

// return axios({
    //   method: "POST",
    //   url: "http://3.109.247.241:6678/api/auth/login",
    //   data: values,
    //   // auth: {
    //   //   email,
    //   //   password
    //   // }
    // })
    // .then(response => {
    //   props.setSubmitting(true);
    //   props.resetForm();
    //   console.log("You are logged in")
     
    // })
    // .catch(error => {
    //   props.setSubmitting(false);
      
    // });
  
    // this shouldn't be outside the .then/.catch
    // if you are going to use .then/.catch, put the above line inside it
    // authenticate.login();
    // Router.push("/")  

  return (
    <div>

      <div className="pgaddressrow">
        <h1 className="heading">Login / Register</h1>
        <h4 className="smheading"><a href="/">Home</a> / login / <a href="/customer">Register</a></h4>
      </div>

      <div className="loginformCon">
        <h4>Welome Back</h4>
        <h2>LOGIN</h2>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
          {(props) => (
          
            <Form>

              <div className="loginforminputs">

                <div className="form-group">
                  <label>Username or email address</label>

                  <Field 
                  
                  name="email"
                  className="form-control" 
                  type="text"
                   />
                   <div className="error"><ErrorMessage name="email"/></div>
                </div>
              

                <div className="form-group">
                  <label>Password</label>

                  <Field 
                  name="password"
                  className="form-control" 
                  type="password" />
                  <div className="error"><ErrorMessage name="password"/></div>

                </div>

                <div className="loginbtnrow">
                  <button 
                  disabled={props.isSubmitting}
                  className="loginbtn" 
                  type="submit">{props.isSubmitting ? "Loading" : "LOG IN"}</button>

                  <Field 
                  name="rememberMe"
                  type="checkbox" 
                  id="rememberme" 
                  style={{ "marginLeft": "10px", "marginRight": "10px" }} />
                  Remember me
                </div>
                <div 
                className="lostyourpasswordrw">
                  <a href="/forgot">Lost your password?</a></div>
              </div>

            </Form>
          )}
        </Formik>

      </div>



    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login
