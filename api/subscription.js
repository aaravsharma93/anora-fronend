import Axios from "axios";
import urls from "../contstants/urls";

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.anora.io"

export const getSubscriptions = async () => {
    return Axios.get(urls.subscriptionsUrl);
}