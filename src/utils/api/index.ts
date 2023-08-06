import axios from "axios";
import { userData } from "../types";

const liveURI = "https://cwmendpoint-server.onrender.com/api/clientauth";

// register: /clientregister
// login: /clientlogin

export interface login {
  email: string;
  password: string;
}

export const createClient = async ({
  name,
  email,
  password,
  phoneNumber,
  address,
}: userData) => {
  return await axios
    .post(`${liveURI}/clientregister`, {
      name,
      email,
      password,
      phoneNumber,
      address,
    })
    .then((res) => res.data);
};

export const loginClient = async ({ email, password }: login) => {
  return await axios
    .post(`${liveURI}/clientlogin`, { email, password })
    .then((res) => res.data);
  // .catch((err) => console.log(`this is api consumption error`, err));
};

export const getOneClient = async (id: any) => {
  return await axios.get(`${liveURI}/${id}`).then((res) => res.data);
};

//get all clients

export const getAllClients = async () => {
  return axios.get(`${liveURI}/`).then((res) => res.data);
};

//dashboard

// const liveURI1 = `https://cwmendpoint-server.onrender.com/api/clientdashboard`;

//this will be mapped on the admindashboard
export const getAllClientMsg = async () => {
  return await axios
    .get(
      `https://cwmendpoint-server.onrender.com/clientdashboard/allclientmessages`
    )
    .then((res) => res.data);
};
