import { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { AxiosResponse } from "axios";
import { axiosinstance } from "../Axios/Axios";
import "../login.css";
  
import { useNavigate } from "react-router-dom";

interface UserData {
  name: string;
  email: string;
  age: number;
  password: string;
  repassword: string;
}

function Register() {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    age: 0,
    password: "",
    repassword: "",
  });

  async function registerUser(): Promise<void> {
    try {
      const response: AxiosResponse<void> = await axiosinstance.post<void>(
        "register",
        userData
      );
      console.log("User registered successfully:", response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }

  const { name, email, age, password, repassword } = userData;

  const navigate = useNavigate()

  return (
    <MDBContainer className="my-1 gradient-form">
      <MDBRow>
        <MDBCol col="4" className="mb-2">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="https://img.myloview.com/posters/dating-app-icon-dating-app-logo-love-icon-love-logo-design-vector-700-194380654.jpg"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">Register with The Lotus Team</h4>
            </div>
            <p>Please fill in the following details to register</p>
            <MDBInput
              wrapperClass="mb-3"
              value={name}
              label="Username"
              id="username"
              type="text"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            <MDBInput
              wrapperClass="mb-3"
              value={email}
              label="Email address"
              id="email"
              type="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <MDBInput
              wrapperClass="mb-3"
              value={age}
              label="Age"
              id="age"
              type="number"
              onChange={(e) =>
                setUserData({ ...userData, age: parseInt(e.target.value, 10) })
              }
            />
            <MDBInput
              wrapperClass="mb-3"
              value={password}
              label="Password"
              id="password"
              type="password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <MDBInput
              wrapperClass="mb-3"
              value={repassword}
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              onChange={(e) =>
                setUserData({ ...userData, repassword: e.target.value })
              }
            />

            <div className="text-center pt-1 mb-3 pb-1">
              <MDBBtn
                className="mb-2 w-100 gradient-custom-2"
                onClick={registerUser}
              >
                Register
              </MDBBtn>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-2">
              <p className="mb-0">Already have an account?</p>
              <MDBBtn outline className="mx-2" color="danger" onClick={()=>navigate('/login')}>
                Login
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
        <MDBCol col="4" className="mb-2">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-dark px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
