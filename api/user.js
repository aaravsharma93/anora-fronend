import Axios from 'axios';
import urls from '../contstants/urls';

Axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_API_URL ?? 'https://api.anora.io';

if (typeof window !== 'undefined') {
  Axios.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('anoraAuth');
  console.log(
    'localStorage.getItem(anoraAuth): ',
    localStorage.getItem('anoraAuth')
  );
}
export async function signupUser(email, password) {
  return Axios.post(urls.signupUrl, { email: email, password: password });
}

export async function loginUser(email, password) {
    console.log("Next",process.env.NEXT_PUBLIC_API_URL,"React", process.env.REACT_APP_API_URL)
  return Axios.post(urls.loginUrl, { email: email, password: password });
}

export async function fetchProfile() {
  return Axios.get(urls.profile);
}

export async function inviteAffiliate(email) {
  return Axios.post(urls.inviteAffiliateUrl, { email });
}

export async function resetPassword(password) {
  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('anoraAuth')
  }
  return Axios.post(urls.resetPasswordUrl, { password },{
    headers: headers
  });
}

export async function saveDetails(data) {
  const headers = {
    'Content-Type': 'multipart/form-data'
  }
  return Axios.post(urls.affiliateDetails, data, {
    headers: headers
  });
}
