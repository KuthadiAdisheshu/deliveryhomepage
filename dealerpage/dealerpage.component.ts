import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealerpage',
  templateUrl: './dealerpage.component.html',
  styleUrls: ['./dealerpage.component.scss']
})
export class DealerpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ondealer(){
  console.log('add dealers');
}
onbeats(){
  console.log('day beats');
}
onpending(){
  console.log('pending bills');
}
onclosing(){
  console.log('closing stock');
}

}
