// Copyright (c) 2020 gusprado
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

export default api;
