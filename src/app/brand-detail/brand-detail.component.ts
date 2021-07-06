import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {

  courseForm: FormGroup;

  constructor() {
   }

  ngOnInit(): void {
    
    this.initForm();
  }

  onSubmit() {
    console.log(this.courseForm);
  }

  onClear() {
    this.courseForm.reset();
    // console.log('clear')
  }

  private initForm() {
    this.courseForm = new FormGroup({
      'Brand': new FormControl(null),
      'Size': new FormControl(null),
      'Phone': new FormControl(null),
      'Extra Dimensions': new FormControl(null),
      'Color': new FormControl(null),
      'Material': new FormControl(null),
      'Price': new FormControl(null),
      'Features': new FormControl(null)
    });
  }
}
