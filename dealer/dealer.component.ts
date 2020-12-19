import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router} from '@angular/router';


@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent implements OnInit {
  Dealer!: FormGroup;
  
  
    constructor(
      private fm:FormBuilder,
      private router: Router,
    ) { }
  
    ngOnInit(): void {
      this.Dealer = this.fm.group({
           firstName:["",Validators.required,],
           lastName:["",Validators.required],
           phone:[""],
           address:[""],
           aadhar:[""],
           pan:[""],
           dob:[""],
           password:[""],
           confirmPwd:[""],
          //  signupas:[""],
         })
    }
    dealerSubmit(){
      console.log(this.Dealer.value);
    }
  
  
  }
  