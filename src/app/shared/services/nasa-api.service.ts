import { Injectable } from '@angular/core';
import {BaseApiService} from "../../core/services/base-api.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NasaApiService extends BaseApiService{

  protected API_URL: string = environment.apiUrl;
  protected API_URL_LIB: string = environment.apiUrlLibrary;
  protected API_KEY: string = environment.apiKey;

  /* APOD */
  public getApod(date: any): Observable<any> {
    return this.httpGet(this.API_URL + '/planetary/apod' ,{ date, api_key: this.API_KEY });
  }

  /* Asteroids - NeoWs */
  public getAsteroidsFeed(start_date: any, end_date: any): Observable<any> {
    return this.httpGet(this.API_URL + '/neo/rest/v1/feed' ,{ start_date, end_date, api_key: this.API_KEY });
  }

  public getAsteroidsLookup(): Observable<any> {
    return this.httpGet(this.API_URL + '/neo/rest/v1/neo/3542519' ,{ api_key: this.API_KEY });
  }

  /* InSight: Mars Weather Service API */
  public getWeather(feedtype: string, ver: number): Observable<any> {
    return this.httpGet(this.API_URL + '/insight_weather/' ,{api_key: this.API_KEY, feedtype, ver });
  }

  /* Mars Rover Photos */
  public getRoverPhotosSol(sol: number): Observable<any> {
    return this.httpGet(this.API_URL + '/mars-photos/api/v1/rovers/curiosity/photos' ,{ sol, api_key: this.API_KEY});
  }

  public getRoverPhotosSolCamera(sol: number, camera: string): Observable<any> {
    return this.httpGet(this.API_URL + '/mars-photos/api/v1/rovers/curiosity/photos' ,{ sol, camera, api_key: this.API_KEY});
  }

  public getRoverPhotosSolPage(sol: string, page: number): Observable<any> {
    return this.httpGet(this.API_URL + '/mars-photos/api/v1/rovers/curiosity/photos' ,{ sol,page, api_key: this.API_KEY});
  }

  public getRoverPhotosByEarthDate(earth_date: string): Observable<any> {
    return this.httpGet(this.API_URL + '/mars-photos/api/v1/rovers/curiosity/photos' ,{ earth_date, api_key: this.API_KEY});
  }

  /* NASA Image and Video Library */
  //Retrieving a media asset’s manifest
  public getLibraryMedia(description: string, media_type: string): Observable<any> {
    return this.httpGet(this.API_URL_LIB + '/search', {description, media_type});
  }

  /* DONKI */
  //Coronal Mass Ejection
  public getCME(startDate: any, endDate: any): Observable<any> {
    return this.httpGet(this.API_URL + '/DONKI/CME' ,{ startDate, endDate, api_key: this.API_KEY});
  }
}
