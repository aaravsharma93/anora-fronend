import Axios from "axios";
import urls from "../contstants/urls";
Axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.anora.io";

export const getCoins = async (limit,pageNo) => {
  return Axios.get(`/currency/get?limit=${limit}&page=${pageNo}`);
};

export const getGrades = async (currencyId) => {
  return Axios.get(`/grades/get/${currencyId}`);
};

export const postGrades = async (currencyId, payload) => {
  return Axios.post(`/grades/post/${currencyId}`, payload);
};

export const searchCoins = async (limit, keyword="") => {
  return Axios.get(`/currency/get?limit=${limit}&keyword=${keyword}`);
};
