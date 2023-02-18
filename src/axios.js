// coustom axios instance is made for saving the base URL 

import axios from 'axios'
import {baseUrl} from './constants/constants' 


const instance = axios.create({
    baseURL: baseUrl,
  });

export default instance

