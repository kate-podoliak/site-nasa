import { Component } from '@angular/core';
import {NasaApiService} from "../../shared/services/nasa-api.service";
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import {FORMAT_DATE_CALENDAR, FORMAT_DATE_QUERY} from "../../core/constants/format.constant";

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent {

  public response: any;
  public date: any;
  public error: boolean;
  public urlSafe: SafeResourceUrl;
  public readonly FORMAT_DATE_CALENDAR = FORMAT_DATE_CALENDAR;
  public readonly rangeDateStart = new Date(1995, 5, 16);
  public readonly rangeYearStart = this.rangeDateStart.getFullYear();
  public readonly rangeDateEnd = new Date();
  public readonly rangeYearEnd = this.rangeDateEnd.getFullYear();
  public readonly rangeYear = this.rangeYearStart + ':' + this.rangeYearEnd;

  constructor(private nasaApiServise: NasaApiService, public sanitizer: DomSanitizer, private datePipe: DatePipe) {}

  onSubmit() {
    const date = this.datePipe.transform(this.date,FORMAT_DATE_QUERY);
    this.nasaApiServise.getApod(date).subscribe(
      (response) => {
          this.error = false;
          this.response = response;
          this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(response.url);
      },
      (error: any) => {
          this.error = true;
      }
    );
  }
}
