/* --- Angular Imports --- */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* --- Routing Module --- */
import { AppRoutingModule } from './app-routing.module';

/* --- Components --- */
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  bootstrap: [MainComponent],
  declarations: [

    /* --- Components --- */
    HeaderComponent,
    MainComponent

  ],
  imports: [

    /* --- Angular Imports --- */
    BrowserModule,

    /* --- Routing Module --- */
    AppRoutingModule

  ],
  providers: []
})
export class AppModule { }
