import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
done:any;

  constructor(
    private fm:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.done=this.fm.group({
      Rupees:[""],
    })
  }

  doneSubmit(){

    
  console.log(this.done.value)
  }

}
