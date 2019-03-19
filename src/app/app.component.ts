import { Component, OnInit, ViewChild
, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  newForm: FormGroup;
  count:number = 0;
  isDisabled:boolean = true;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.emailGetter.valueChanges.subscribe((res) => {
      if(res) {
        console.log(res);
      }
    })

    this.newForm.valueChanges.subscribe((res) => {
      console.log(res);
      if(this.newForm.valid) {
        this.isDisabled = false;
      }
    })
  }

  createForm() {
    this.newForm = this.fb.group({
      myEmail: ['', Validators.required],
      myName: ['', Validators.required]
    })
  }

  get emailGetter() {
    return this.newForm.get('myEmail')
  }
  get nameGetter() {
    return this.newForm.get('myName')
  }

  submit() {
    let formInput = this.getFormValue();
    console.log(formInput);
    this.newForm.reset();
    this.count ++;
    this.count % 2 === 0 ? this.emailGetter.disable() : this.emailGetter.enable();
  }

  getFormValue() {
    let temp:any = {};
    temp.email = this.emailGetter.value;
    temp.name = this.nameGetter.value;
    return temp;
  }
}
