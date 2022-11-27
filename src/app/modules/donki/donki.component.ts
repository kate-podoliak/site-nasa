import { Component } from '@angular/core';
import {FORMAT_DATE_CALENDAR, FORMAT_DATE_QUERY} from "../../core/constants/format.constant";
import {NasaApiService} from "../../shared/services/nasa-api.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-donki',
  templateUrl: './donki.component.html',
  styleUrls: ['./donki.component.scss']
})
export class DonkiComponent {
  public data: any;
  public rangeDates: Date[];
  public error: string;
  public readonly rangeDateStart = new Date(2000, 0);
  public readonly rangeYearStart = this.rangeDateStart.getFullYear();
  public readonly rangeDateEnd = new Date();
  public readonly rangeYearEnd = this.rangeDateEnd.getFullYear();
  public readonly rangeYear = this.rangeYearStart + ':' + this.rangeYearEnd;
  public readonly FORMAT_DATE_CALENDAR = FORMAT_DATE_CALENDAR;

  constructor(private nasaApiServise: NasaApiService, private datePipe: DatePipe) { }

  onSubmit() {
    if (this.rangeDates == null || this.rangeDates[1] == null) {
      this.error = 'The request failed! Check the entered data. You should input two dates!';
    }
    else {
      const dateStart = this.datePipe.transform(this.rangeDates[0],FORMAT_DATE_QUERY);
      const dateEnd = this.datePipe.transform(this.rangeDates[1],FORMAT_DATE_QUERY);
      this.nasaApiServise.getCME(dateStart, dateEnd).subscribe(
        (response) => {
          this.data = response;
          this.error = this.data.length === 0 ? 'No results were found.' : '';
        },
        (error: any) => {
          this.error = 'The request failed! ' + error;
        }
      );
    }
  }
}
