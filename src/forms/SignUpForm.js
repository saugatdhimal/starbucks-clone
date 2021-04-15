import React from "react";
import "./SignUpForm.css";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../features/userSlice";

function SignUpForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {register,formState: { errors },handleSubmit,} = useForm();
  
  const onSubmit = ({ firstname, lastname, email, password }) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: `${firstname} ${lastname}`,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: firstname,
              })
            );
            history.replace("/menu");
          });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signUpForm">
      <h4>create an account</h4>
      <Paper elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h6">Personal Information</Typography>
          <div className="signUpForm__inputcontainer">
            <TextField
              variant="standard"
              label="First name"
              fullWidth
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <div className="signUpForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter your first name</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signUpForm__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="signUpForm__inputcontainer">
            <TextField
              variant="standard"
              label="Last name"
              fullWidth
              {...register("lastname", { required: true })}
            />
            {errors.lastname && (
              <div className="signUpForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter your last name</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signUpForm__reportIcon"
                />
              </div>
            )}
          </div>
          <br />
          <Typography variant="h6">Account Security</Typography>
          <div className="signUpForm__inputcontainer">
            <TextField
              type="email"
              variant="standard"
              label="Email address"
              fullWidth
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className="signUpForm__error">
                <CloseIcon fontSize="small" />
                <span>Please enter your email address</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signUpForm__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="signUpForm__inputcontainer">
            <TextField
              type="password"
              variant="standard"
              label="Password"
              fullWidth
              {...register("password", { required: true })}
            />
            {errors.password && (
              <div className="signUpForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter a password</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signUpForm__reportIcon"
                />
              </div>
            )}
          </div>
          <br />
          <p>Already have a Starbucks gift card?</p>
          <br />
          <Button elevation={3} variant="contained" type="submit" size="large">
            Create account
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default SignUpForm;
