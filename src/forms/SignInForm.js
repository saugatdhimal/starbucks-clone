import React, { useState } from "react";
import "./SignInForm.css";
import { TextField, Button, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { login } from "../features/userSlice";

function SignInForm() {
  const dispatch = useDispatch();
  const {register,formState: { errors },handleSubmit,} = useForm();
  const [ passwordVisibility, setPasswordVisibility ] = useState(false)
  const onSubmit = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signInForm">
      <h4>Sign in or create an account</h4>
      <Paper elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signInForm__inputcontainer">
            <TextField
              type="email"
              variant="standard"
              label="Email"
              fullWidth
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className="signInForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter a email</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signInForm__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="signInForm__inputcontainer">
            <TextField
              type={passwordVisibility ? "text" : "password"}
              variant="standard"
              label="Password"
              fullWidth
              {...register("password", { required: true })}
            />
            {passwordVisibility ? (
              <VisibilityOutlinedIcon 
              className="signInForm__visibilityIcon"
              onClick = {() => setPasswordVisibility(!passwordVisibility)}
              />
            ): (
              <VisibilityOffOutlinedIcon
              className="signInForm__visibilityIcon"
              onClick = {() => setPasswordVisibility(!passwordVisibility)}
              />
            )
          }
            {errors.password && (
              <div className="signInForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter a password</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signInForm__reportIcon"
                />
              </div>
            )}
          </div>
          <br />
          <p>Forgot your username?</p>
          <p>Forgot your password?</p>
          <br />
          <Button elevation={3} variant="contained" type="submit" size="large">
            Sign In
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default SignInForm;
