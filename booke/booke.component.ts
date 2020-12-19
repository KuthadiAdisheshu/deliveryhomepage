import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booke',
  templateUrl: './booke.component.html',
  styleUrls: ['./booke.component.scss']

  
})
export class BookeComponent implements OnInit {
 
  selectedProduct: any;




  



//   product:product[];
//   types={};

//   products=[
//     {
//     id: 1, name: 'Jhadoo', types:['Royal','Bheem','Smart']
//   },
//    { id: 2 ,name: 'Mops', types:['Round','Flat Mop']
//   },
//    { id: 3,name: 'FloorCleaner',types:['Rose','jasmine']
//   },
//     {id: 4,name: 'Acid',types:['acid 1ltr','acid 2ltr']
//   },
//     {id: 4,name: 'BleachingPowder',types:['bleach 1','bleach 2']
//   },
//     {id: 5,name: 'Wiper',types:['wiper','wiper', 'big']
//   },
//     {id: 6,name: 'Scrubber',types:['scrub pad big','steel scrub']
//   }
// ];

  constructor() {}

  ngOnInit(): void {
    // this.types=this.products.filter(x=>x.id==1)[0].types;
  }

  onchange(deviceValue: number){
    // this.types=this.products.filter(x=>x.id==deviceValue)[0].types;
  }


  quantity:number=1;
  i=1
  plus(){
    if(this.i<10){
      this.i++;
      this.quantity=this.i;
    }
   
  }

  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
  }
}

