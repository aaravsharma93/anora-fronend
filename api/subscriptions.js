import Axios from "axios";
import urls from "../contstants/urls";

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.anora.io"

export async function getSubscriptionData() {
    return Axios.get(urls.getSubscriptionData)
}

export async function updateSubscriptionData(payload) {
    return Axios.put(urls.updateSubscriptionData, { ...payload })
}