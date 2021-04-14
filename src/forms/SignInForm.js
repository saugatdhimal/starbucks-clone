import React from "react";
import "./SignInForm.css";
import { TextField, Button, Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

function SignInForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="signInForm">
      <h4>Sign in or create an account</h4>
      <Paper elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="signInForm__inputcontainer">
          <TextField
            type="text"
            variant="standard"
            label="Username"
            fullWidth
            {...register("username", { required: true })}
          />
          {errors.username && (
            <div className="signInForm__error">
              <CloseIcon fontSize="small" />
              <span>Enter a email/username</span>
              <ReportProblemRoundedIcon
                fontSize="small"
                className="signInForm__reportIcon"
              />
            </div>
          )}
          </div>
          <div className="signInForm__inputcontainer">
          <TextField
            type="password"
            variant="standard"
            label="Password"
            fullWidth
            {...register("password", { required: true })}
          />
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
          <Button elevation={3} variant="contained" type="submit">
            Sign In
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default SignInForm;
