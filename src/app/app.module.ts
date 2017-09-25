import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomComponent } from './components/custom-component/custom-component'; 
import { CustomDirective } from './components/custom-directive/custom-directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
