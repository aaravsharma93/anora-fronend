import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.anora.io';

export class Crud {

    currency(url) {
        this._endPoint = "/currency" + url
        this.method("GET");
        return this;
    }

    static make() {
        return new Crud()
    }

    method(method) {
        this._method = method;
    }

    get() {
        return this.send({method: "GET"})
    }

    post() {
        return this.send({method: "POST"})
    }

    send(config) {
        return axios(API_URL + this._endPoint, config);
    }
}
