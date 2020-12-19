import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onbeat(){
    console.log('day beats');
  }
  onclose(){
    console.log('closing stock');
  }
  onpending(){
    console.log('pending bills');
  }
  onadd(){
    console.log('add sales');
  }
}
