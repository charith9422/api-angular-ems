import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  //private url: string;
  private data: any;

  private configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {
    /* this.http.get<any>(this.configUrl).subscribe(res => {
      //this.url = res.host;
      //console.log(res.host);
      console.log("config service!");

    }); */
  }
  load(url: string) {
    return new Promise((resolve) => {
      this.http.get(url)
        .subscribe(config => {
          this.data = config;
          resolve();
        });
      console.log(this.data);
    });

  }


  getUrl(): string {
    return this.data.host;
  }

}
