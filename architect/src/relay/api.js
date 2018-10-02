import axios from 'axios';
import Config from '../config/apiGraph';

export default class API {
    fetch({ path = '', payload, headers }) {
        return axios({
            baseURL: Config.API_SERVER,
            data: payload,
            method: 'POST',
            url: path,
            headers: headers,
        });
    }
}
