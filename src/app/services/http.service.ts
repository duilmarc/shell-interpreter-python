import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from "../models/results.model"


@Injectable({
  providedIn: 'root'
})


export class HttpService {
  private baseUrl : string ="http://35.199.71.59/exec-python";

  constructor(private readonly _http:HttpClient) { }

  public getResult( valor : string ){

    let postData = { "code" : valor };

    return this._http.post<Results>(this.baseUrl, postData);
    };
  
}

