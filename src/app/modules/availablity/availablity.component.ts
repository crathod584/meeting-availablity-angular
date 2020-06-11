import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-availablity',
  templateUrl: './availablity.component.html'
})
export class AvailablityComponent implements OnInit {
  
  availablityData:any;
  userId:any;
  form: FormGroup;

  constructor(private apiService:APIService, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.getUser();
  }

  get formControl() { return this.form.controls; }

  createForm() {
    this.form = this.fb.group({
      startTime: ["", Validators.required],
      endTime: ["", Validators.required]
    });
  }


  addAvailablity(){
    let data = {...this.form.value}
    data.userId = this.userId;

  	this.apiService.addAvailability(data).subscribe((res) =>{
      alert('User Availablity Added Successfully');
    }, (err) => {
     alert(err.error.text);
    });
  }

  getAvailability(){
    this.apiService.getAvailability(this.userId).subscribe((res) =>{
      this.availablityData = res;
    }, (err) => {
      alert(err.error.text);
    });
  }

  getUser(){
    this.apiService.getUser().subscribe((res) =>{
      this.userId = res[0]._id;
    }, (err) => {
      alert(err.error.text);
    });
  }
}
