import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Pipe({
  name: 'urlToVideoUrl'
})

export class UrlToVideoUrlPipe implements PipeTransform {

  constructor(public sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url.replace('thumb.jpg', 'orig.mp4'));
  }
}
