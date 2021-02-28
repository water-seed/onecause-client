import { stat } from "fs"

export class LoginResult {
    statusCode: number;
    data: any;

    constructor(
        statusCode: number,
        data: any
    ) {
        this.statusCode = statusCode;
        this.data = data;
    }
}