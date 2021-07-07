import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

   showToast:boolean=false;

   form:FormGroup=new FormGroup({});

  constructor(private formBuilder:FormBuilder) {

   }

  ngOnInit(): void {

    this.form=this.formBuilder.group({
        name:'',
        age:'',
        company:'',
        picture:'',
        email:'',
        balance:''
    })
  }

  submitForm(){
    console.log(this.form.getRawValue());
  }

}
