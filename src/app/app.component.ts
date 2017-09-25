import { Component } from '@angular/core';
import { CustomComponent } from './components/custom-component/custom-component'
import { CustomDirective } from './components/custom-directive/custom-directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listCoins: any[];
  constructor() {
    this.listCoins = [];
    this.listCoins.push(1234.56);
    this.listCoins.push(789.56);
    this.listCoins.push(78973.56);
  }
}
