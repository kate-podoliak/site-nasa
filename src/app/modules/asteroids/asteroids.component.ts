import { Component } from '@angular/core';
import {NasaApiService} from "../../shared/services/nasa-api.service";
import {FORMAT_DATE_CALENDAR, FORMAT_DATE_QUERY} from "../../core/constants/format.constant";
import {DatePipe} from "@angular/common";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})
export class AsteroidsComponent {
  public data: any;
  public rangeDates: Date[];
  public error: string;
  public readonly rangeDateStart = new Date(2000, 0);
  public readonly rangeYearStart = this.rangeDateStart.getFullYear();
  public readonly rangeDateEnd = new Date();
  public readonly rangeYearEnd = this.rangeDateEnd.getFullYear();
  public readonly rangeYear = this.rangeYearStart + ':' + this.rangeYearEnd;
  public readonly FORMAT_DATE_CALENDAR = FORMAT_DATE_CALENDAR;

  constructor(private nasaApiServise: NasaApiService, private datePipe: DatePipe) {}

  onSubmit() {
    if(this.rangeDates == null || this.rangeDates[1] == null) {
      this.error = 'You should input two dates!';
    }
    else {
      const dateStart = this.datePipe.transform(this.rangeDates[0],FORMAT_DATE_QUERY);
      const dateEnd = this.datePipe.transform(this.rangeDates[1],FORMAT_DATE_QUERY);
      this.nasaApiServise.getAsteroidsFeed(dateStart, dateEnd).subscribe(
        (response) => {
          this.data = response;
          this.error = "";
        },
        (error: HttpErrorResponse) => {
          this.error = error.error.error_message;
        }
      );
    }
  }
}
