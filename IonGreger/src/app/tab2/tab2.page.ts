import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private http: HttpClient) {}

  GetLocations () {
    return this.http.get(
      "https://api.resrobot.se/v2/location.nearbystops.json?key=808aabc0-1955-4159-b21c-46b52d70dce1&originCoordLat=55.613296&originCoordLong=12.976321"
    );
  }

}
