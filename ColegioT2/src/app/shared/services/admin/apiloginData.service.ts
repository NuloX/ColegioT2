import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpRequestService } from "../common/http-request.service";
import { Parameter } from "../../model/parameter";
import { environment } from "../../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})

export class apiloginService {

    constructor(private _request: HttpRequestService) { }
    LoginIngreso(parametro: Parameter): Observable<any> {
        return this._request.http(parametro)
    }
    Logout(parametro: Parameter): Observable<any> {
        return this._request.http(parametro)
    }

}