import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { brandList, colorList, featureList, phoneList, phoneTextList, priceTextList, sizeList } from '../constants/constant';



@Component({
  selector: 'brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})

export class BrandDetailComponent implements OnInit {

  form: FormGroup;
  brandList = brandList;
  sizeList = sizeList;
  phoneTextList = phoneTextList; 
  priceTextList = priceTextList; 
  colorList = colorList; 
  phoneList = phoneList; 
  featureList = featureList; 

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      brandListArray: this.fb.array([])
    })
  }

  ngOnInit(): void {
    
    this.initForm();
  }

  onSubmit() {
    console.log("submit")
    console.log(this.form);
  }

  onClear() {
    this.form.reset();
    console.log('clear')
  }

  private initForm() {
    
  }

  onCheckboxChange(e) {
    const brandListArray: FormArray = this.form.get('brandListArray') as FormArray;

    if (e.target.checked) {
      brandListArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      brandListArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          brandListArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
