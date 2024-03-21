import React, { useState } from "react";
import character from "../../assets/images/login-char.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";

const Login = () => {
  const nav = useNavigate();
  const [look, setLook] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    passWord: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const buttonCheck =
    formData.userName.length > 0 && formData.passWord.length > 0;

  const handleSave = async () => {
    await axios
      .post("http://localhost:3000/login", formData)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-section">
      <div className="login-form">
        <div className="login-form-left">
          <div className="login-left-text">
            <p className="fs-4" style={{ color: "white", fontWeight: "600" }}>
              LOGO
            </p>
            <p className="fs-6" style={{ color: "white" }}>
              Welcome to our Inventory Management System! Please log in or
              register to access your inventory data and streamline your
              business operations.
            </p>
          </div>
          <div className="char-img-div">
            <img className="char-img" src={character} alt="" />
          </div>
        </div>
        <div className="login-form-right">
          <form action="">
            <p>WELCOME BACK</p>
            <p className="fs-5" style={{ fontWeight: "600" }}>
              Log In to your Account
            </p>
            <div className="data-input-fields-login">
              <TextField
                margin="dense"
                label="User Name"
                placeholder="johnson_doe"
                type="text"
                fullWidth
                name="userName"
                // id="userName"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.userName}
                onChange={(e) => handleInputChange(e)}
                required
                id="form-textfield"
              />
            </div>

            <div className="data-input-fields-login" id="eye-id">
              <TextField
                margin="dense"
                label="Password"
                placeholder="*******"
                type={`${look?"text":"password"}`}
                fullWidth
                name="passWord"
                // id="passWord"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.passWord}
                onChange={(e) => handleInputChange(e)}
                required
                id="form-textfield"
              />
              {
                look?<PiEyeLight className="eye" onClick={()=>setLook(false)}/>:<PiEyeSlashLight className="eye" onClick={()=>setLook(true)}/>
              }
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div className="form-check" style={{ textAlign: "left" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  //   onChange={(e) => handleInputChange(e)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {" "}
                  Remember me{" "}
                </label>
              </div>

              <div style={{ fontWeight: "600", cursor: "pointer" }}>
                Forget Password?{" "}
              </div>
            </div>
            <div className="data-buttons">
              <Button
                id="input-btn-submit"
                className="submit"
                type="submit"
                variant="outlined"
                onClick={() => nav("/")}
                //   onClick={handleSave}
                disabled={buttonCheck ? false : true}
              >
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
