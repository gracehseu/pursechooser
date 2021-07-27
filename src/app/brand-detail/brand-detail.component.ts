import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})

export class BrandDetailComponent implements OnInit {

  courseForm: FormGroup;
  brandList = [
    'Balenciaga',
    'Bottega Veneta',
    'Burberry',
    'Céline',
    'Chanel',
    'Chloé',
    'Dior',
    'Fendi',
    'Ferragamo',
    'Givenchy',
    'Goyard',
    'Gucci',
    'Hermès',
    'Loewe',
    'Louis Vuitton',
    'Miu Miu',
    'Mullberry',
    'Prada',
    'Proenza Schouler',
    'Saint Laurent',
    'Valentino'
  ];

  sizeList = [
    'XS',
    'S',
    'M',
    'L',
    'XL'
  ];

  phoneTextList = [
    'length',
    'width',
    'height'
  ];

  colorList = [
    'Black',
    'White',
    'Brown',
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Pink'
  ];

  phoneList = [
    'iPhone 6',
    'iPhone 6s',
    'iPhone 7',
    'iPhone 8',
    'iPhone X',
    'iPhone 11',
    'iPhone 11 Pro',
    'Samsung Galaxy 8',
    'Samsung Galaxy Note 5'
  ];

  featureList = [
    'Subtle branding',
    'Monogram',
    'Hand held strap',
    'Top zipper',
    'Crossbody strap'
  ]

  constructor() {
   }

  ngOnInit(): void {
    
    this.initForm();
  }

  onSubmit() {
    console.log("submit")
    console.log(this.courseForm);
  }

  onClear() {
    this.courseForm.reset();
    // console.log('clear')
  }

  // download bootstrap this is so dumb
  private initForm() {
    this.courseForm = new FormGroup({
      'Brand': new FormControl(null),
      'Size': new FormControl(null),
      'Phone': new FormControl(null),
      'extraDimensions': new FormGroup({
        'length': new FormControl(null),
        'width': new FormControl(null),
        'height': new FormControl(null),
      }),
      'Color': new FormControl(null),
      'Material': new FormControl(null),
      'Price': new FormControl(null),
      'features': new FormGroup({
        'strap': new FormControl(null),
        'zipper': new FormControl(null),
        'topHandle': new FormControl(null),
      })
    });
  }
}
