import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(protected http: HttpClient) { }

  protected httpGet<T>(url: string, params: any = null): Observable<any> {
    return this.http.get<T>(url, { params });
  }
}
