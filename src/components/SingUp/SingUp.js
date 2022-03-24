import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "semantic-ui-react";
import BocetoIMG from "../../assets/img/Boceto.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import { ValidationRegister } from "../../validations/Forms/Register_Validation";
import * as Yup from "yup";
import "./singUp.css";

export const SingUp = () => {
  const formikData = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPaswword: "",
      termsPrivacy: [],
    },
    validationSchema: Yup.object(ValidationRegister()),
    onSubmit: (dataForm) => {
      console.log(dataForm);
    },
  });

  return (
    <div className="text-center">
      <h3 className="title">Sing Up</h3>
      <div className="content-form row">
        <form onSubmit={formikData.handleSubmit} className="form col">
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="FirstName"
            name="FirstName"
            variant="outlined"
            autoComplete="off"
            onChange={formikData.handleChange}
          />
          <span className="alert">{formikData.errors.FirstName}</span>
          <TextField
            style={{ width: "100%" }}
            label="LastName"
            name="LastName"
            variant="outlined"
            autoComplete="off"
            onChange={formikData.handleChange}
          />
          <span className="alert">{formikData.errors.LastName}</span>
          <TextField
            style={{ width: "100%" }}
            autoComplete="off"
            label="Email"
            name="Email"
            variant="outlined"
            onChange={formikData.handleChange}
          />
          <span className="alert">{formikData.errors.Email}</span>
          <TextField
            style={{ width: "100%" }}
            label="Password"
            name="Password"
            autoComplete="off"
            type="password"
            variant="outlined"
            onChange={formikData.handleChange}
          />
          <span className="alert">{formikData.errors.Password}</span>
          <TextField
            style={{ width: "100%" }}
            label="Confirm Paswword"
            name="ConfirmPaswword"
            type="password"
            autoComplete="off"
            variant="outlined"
            onChange={formikData.handleChange}
          />
          <span className="alert">{formikData.errors.ConfirmPaswword}</span>
          <FormControlLabel
            style={{ textAlign: "initial", marginLeft: "5px" }}
            control={
              <Checkbox
                style={{ color: "#fff" }}
                name="termsPrivacy"
                onChange={formikData.handleChange}
              />
            }
            label="Terms & Privacy"
          />
          <span className="alert">{formikData.errors.termsPrivacy}</span>
          <div className="content-buttons">
            <Button id="btn-submit" basic type="submit">
              Sub Mit
            </Button>
            <span>Or</span>
            <Button className="btn-to-Singning">Sing In</Button>
          </div>
        </form>
        <div className="content-img ">
          <img src={BocetoIMG} alt="boceto-Monkey" />
        </div>
      </div>
    </div>
  );
};
