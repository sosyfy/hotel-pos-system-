import axios from 'axios';
import authService from './auth.service';

var headers;

if ( authService.getCurrentUserAccessToken() ) {
  headers = {
    'Authorization': 'Bearer ' + authService.getCurrentUserAccessToken(),
    'Content-Type': 'application/json',
    'App-Key': authService.getAppKey(),
  };

} else {
  headers = {
    'Content-Type': 'application/json'
  };
}

export const axiosInstance = axios.create({
  headers: headers,
  timeout: 200000,
});

export const baseUrl = "any";
