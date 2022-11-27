import { Component } from '@angular/core';
import { NasaApiService } from "../../shared/services/nasa-api.service";
import { DatePipe } from "@angular/common";
import { FORMAT_DATE_CALENDAR, FORMAT_DATE_QUERY } from "../../core/constants/format.constant";

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.scss']
})
export class RoverComponent {
  public response: any;
  public date: any;
  public error: string;
  public images: any[];
  public readonly FORMAT_DATE_CALENDAR = FORMAT_DATE_CALENDAR;
  public readonly rangeDateStart = new Date(2000, 1)
  public readonly rangeYearStart = this.rangeDateStart.getFullYear();
  public readonly rangeDateEnd = new Date();
  public readonly rangeYearEnd = this.rangeDateEnd.getFullYear();
  public readonly rangeYear = this.rangeYearStart + ':' + this.rangeYearEnd;

  public activeIndex: number = 0;
  public displayCustom: boolean;

  constructor(private nasaApiServise: NasaApiService, private datePipe: DatePipe) { }

  onSubmit() {
    if (this.date == null) {
      this.error = 'The request failed! Check the entered data. You should input date!'
    } else {
      this.error = '';
      this.images = [];
      const date = this.datePipe.transform(this.date, FORMAT_DATE_QUERY) as string;
      this.nasaApiServise.getRoverPhotosByEarthDate(date).subscribe(
        (response) => {
          for (let prop in response.photos) {
            this.images.push({
              previewImageSrc: response.photos[prop].img_src,
              thumbnailImageSrc: response.photos[prop].img_src,
              name: response.photos[prop].camera.name,
              rover_name: response.photos[prop].rover.name,
              rover_landing: response.photos[prop].rover.landing_date,
              rover_launch: response.photos[prop].rover.launch_date,
              rover_status: response.photos[prop].rover.status
            });
          }
          this.error = this.images?.length === 0 ? 'No photos found for this date.' : '';
        },
        (error) => {
          this.images = [];
          this.error = 'The request failed! ' + error.error.error_message;
        }
      );
    }
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
