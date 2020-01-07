import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    {
      provide   : APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps      : [ConfigService],
      multi     : true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function ConfigLoader(configService: ConfigService) {
  return () => configService.load('../assets/config.json');
}