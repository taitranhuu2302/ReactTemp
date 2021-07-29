import axios from "axios";
import * as config from "./../Constant/Config";

export default function callApi(endpoind, method = "GET", body) {
  return axios({
    method: method,
    url: `${config.API_URL}/${endpoind}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
