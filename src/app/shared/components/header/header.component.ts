import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public links: { title: string, link: string }[] = [
    { title: "Apod", link: "apod" },
    { title: "Asteroids - NeoWs", link: "asteroids" },
    { title: "InSight: Mars Weather Service API", link: "weather" },
    { title: "Mars Rover Photos", link: "rover" },
    { title: "NASA Image and Video Library", link: "library" },
    { title: "DONKI", link: "donki" }
    ];
}
