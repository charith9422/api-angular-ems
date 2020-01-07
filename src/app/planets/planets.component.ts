import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Planet } from './planet';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planet: Planet;

  constructor(private configService: ConfigService, private http: HttpClient) { }

  ngOnInit() {
    this.showConfig();
  }
  showConfig() {
    this.http.get(this.configService.getUrl()).subscribe(res => {
      console.log(res);
      console.log("Worked!!!!!");

    })
    //console.log(this.configService.getUrl());

  }

}
