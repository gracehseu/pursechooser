import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { brandList, colorList, featureList, phoneList, phoneTextList, priceTextList, sizeList } from '../constants/constant';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';


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

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.initForm();

  }

  ngOnInit(): void {
    
    this.initForm();
  }

  onSubmit() {
    console.log("submit")
    console.log(this.form.value);
    const values = this.form.value;
    const colorArray = [];
    console.log('before for loop');
    for (var i in colorList) {
      console.log('hello');
      console.log("colorList[i] " + colorList[i]);
      console.log("values[colorList[i]] " + values[colorList[i]]);
      console.log(typeof(values));
      if (values[colorList[i]] == 'true') {
        console.log(i + " " + colorList[i]);
        colorArray.push(colorList[i]);
      }
    }
    this.router.navigate(['/search'], 
                { queryParams: 
                    { brand: values.brandListArray, 
                      size: values.sizeListArray,
                      features: values.featureListArray,
                      color: colorArray,
                    }
                });
    
  }

  onClear() {
    this.form.reset();
    console.log('clear')
  }

  private initForm() {
    this.form = this.fb.group({
      brandListArray: this.fb.array([]),
      phone: new FormControl(null),
      l: new FormControl(null),
      w: new FormControl(null),
      h: new FormControl(null),
      maxPrice: new FormControl(null),
      minPrice: new FormControl(null),
      sizeListArray: this.fb.array([]),
      featureListArray: this.fb.array([]),
      black: new FormControl(null),
      white: new FormControl(null),
      brown: new FormControl(null),
      red: new FormControl(null),
      orange: new FormControl(null),
      yellow: new FormControl(null),
      green: new FormControl(null),
      blue: new FormControl(null),
      purple: new FormControl(null),
      pink: new FormControl(null),
      gray: new FormControl(null),
      silver: new FormControl(null),
      gold: new FormControl(null),
      multi: new FormControl(null),
    })
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

  onSizeChangeEvent(e) {
    const sizeListArray: FormArray = this.form.get('sizeListArray') as FormArray;

    if (e.target.checked) {
      sizeListArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      sizeListArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          sizeListArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }



  onFeatureChange(e) {
    const featureListArray: FormArray = this.form.get('featureListArray') as FormArray;

    if (e.target.checked) {
      featureListArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      featureListArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          featureListArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
