import axios from "axios";
import { userData, userOnboarding } from "../utils/types";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { new_user } from "../global/RecoilState";

// const liveURI = "https://twma-be.onrender.com/twma";
const liveURI = "http://localhost:3333/twma";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (data: userData) => {
    setLoading(true);

    return await axios
      .post(`${liveURI}/admin-auth/register`, data)
      .then((res) => {
        // console.log(res.data.data);
        setLoading(false);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/login");

        return res.data.data;
      })
      .catch((error: any) => {
        console.log(error.message);
        setLoading(false);
        toast.error("something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return { loading, register };
};
export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [newuser, setNewUser] = useRecoilState(new_user);
  const navigate = useNavigate();

  const register = async (data: userData) => {
    setLoading(true);

    return await axios
      .post(`${liveURI}/admin-auth/login`, data)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setNewUser(res.data.data);

        if (
          newuser.pspName &&
          newuser.station &&
          newuser.officeAddress &&
          newuser.phoneNum === ""
        ) {
          navigate("/onboarding");
          newuser.isAuthenticated = true;
        } else {
          navigate("/dashboard");
        }

        // navigate("/onboarding");
        return res.data.data;
      })
      .catch((error: any) => {
        console.log(error.message);
        console.log(error);
        setLoading(false);
        toast.error("something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return { loading, register };
};

export const useOnboarding = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [newuser, setNewUser] = useRecoilState(new_user);

  const Onboarding = async (data: userOnboarding, id: string) => {
    setLoading(true);

    return await axios
      .patch(`${liveURI}/admin-auth/onboarding/${id}`, data)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setNewUser(res.data.data);

        navigate("/dashboard");

        // return res.data.data;
        console.log(`this is data, ${res.data.data}`);
      })
      .catch((error: any) => {
        console.log(error.message);
        console.log(error);
        setLoading(false);
        toast.error("something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return { loading, Onboarding };
};
