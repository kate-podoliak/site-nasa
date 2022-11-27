import { Component } from '@angular/core';
import {NasaApiService} from "../../shared/services/nasa-api.service";
import {FORMAT_DATE_QUERY} from "../../core/constants/format.constant";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {

  public data: any;
  public input: string;
  public error: string;
  public selectedTypes: string[] = ['image', 'video'];
  public page: number = 1;
  public maxSize: number = 5;
  public itemsPerPage: number = 15;
  public readonly FORMAT_DATE = FORMAT_DATE_QUERY;

  constructor(private nasaApiServise: NasaApiService) { }

  onSubmit() {
    if(this.input == null) {
      this.error = 'The request failed! Check the entered data. You should input keywords for search!';
    }
    else {
      this.nasaApiServise.getLibraryMedia(this.input, this.selectedTypes.join(',')).subscribe(
        (response) => {
          this.data = response;
          this.error = this.data.collection.items?.length === 0 ? 'No results were found.' : '';
        },
        (error: any) => {
          this.error = 'The request failed! ' + error;
        }
      );
    }
  }

  pageChanged(event: any){
    this.page = event;
    window.scrollTo(0, 0);
  }
}
