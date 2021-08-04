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
      brandListArray: this.fb.array([]),
      phone: new FormControl(null),
      l: new FormControl(null),
      w: new FormControl(null),
      h: new FormControl(null),
      maxPrice: new FormControl(null),
      minPrice: new FormControl(null),
      sizeListArray: this.fb.array([]),
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

  ngOnInit(): void {
    
    this.initForm();
  }

  onSubmit() {
    console.log("submit")
    console.log(this.form.value);
  }

  onClear() {
    this.form.reset();
    console.log('clear')
  }

  private initForm() {
    
  }

  // (function () {
  //   const parent = document.querySelector('.range-slider');

  //   if (!parent) {
  //     return;
  //   }

  //   const rangeS = parent.querySelectorAll('input[type="range"]'),
  //     numberS = parent.querySelectorAll('input[type="number"]');

  //   rangeS.forEach((el) => {
  //     el.oninput = () => {
  //       let slide1 = parseFloat(rangeS[0].value),
  //         slide2 = parseFloat(rangeS[1].value);

  //       if (slide1 > slide2) {
  //         [slide1, slide2] = [slide2, slide1];
  //       }

  //       numberS[0].value = slide1;
  //       numberS[1].value = slide2;
  //     }
  //   });

  //   numberS.forEach((el) => {
  //     el.oninput = () => {
  //       let number1 = parseFloat(numberS[0].value),
  //         number2 = parseFloat(numberS[1].value);

  //       if (number1 > number2) {
  //         let tmp = number1;
  //         numberS[0].value = number2;
  //         numberS[1].value = tmp;
  //       }

  //       rangeS[0].value = number1;
  //       rangeS[1].value = number2;
  //     }
  //   });
  // })();

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

  onColorChangeEvent(e) {
    const colorListArray: FormArray = this.form.get('colorListArray') as FormArray;

    if (e.target.checked) {
      colorListArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      colorListArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          colorListArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
