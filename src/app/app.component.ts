import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPurse';
  brands = new FormControl();

  constructor() {
    
  }

}
