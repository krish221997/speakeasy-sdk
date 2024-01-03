/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { Customers } from "./customers";
import { Products } from "./products";

export class Client extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }

    private _customers?: Customers;
    get customers() {
        return (this._customers ??= new Customers(this.options$));
    }

    private _products?: Products;
    get products() {
        return (this._products ??= new Products(this.options$));
    }
}
