import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsales',
  templateUrl: './addsales.component.html',
  styleUrls: ['./addsales.component.scss']
})
export class AddsalesComponent implements OnInit {
  today: number =Date.now();
    shopNames=[
      {'sl':1,
        'name':'XYZ Pvt Ltd'
    },
    {'sl':2,
        'name':'XYZ Pvt Ltd'
    },
    {'sl':3,
        'name':'XYZ1 Pvt Ltd'
    },
    {'sl':4,
        'name':'ABC Pvt Ltd'
    },
    {'sl':5,
        'name':'XYZ3 Pvt Ltd'
    },
    {'sl':6,
        'name':'XYZ4 Pvt Ltd'
    },
    {'sl':7,
        'name':'XYZ5 Pvt Ltd'
    },
    {'sl':8,
        'name':'XYZ6 Pvt Ltd'
    },
    {'sl':9,
        'name':'XYZ7 Pvt Ltd'
    },
    {'sl':10,
    'name':'XYZ1 Pvt Ltd'
  },
  {'sl':11,
    'name':'ABC Pvt Ltd'
  },
  {'sl':12,
    'name':'XYZ3 Pvt Ltd'
  },
  {'sl':13,
    'name':'XYZ4 Pvt Ltd'
  },
  {'sl':14,
    'name':'XYZ5 Pvt Ltd'
  },
  {'sl':15,
    'name':'XYZ6 Pvt Ltd'
  },
  {'sl':16,
    'name':'XYZ7 Pvt Ltd'
  },
  {'sl':17,
  'name':'XYZ1 Pvt Ltd'
  },
  {'sl':18,
  'name':'ABC Pvt Ltd'
  },
  {'sl':19,
  'name':'XYZ3 Pvt Ltd'
  },
  {'sl':20,
  'name':'XYZ4 Pvt Ltd'
  },
  {'sl':21,
  'name':'XYZ5 Pvt Ltd'
  }
    ]
  selectstore:any;
  opFromPrompt:any;
    constructor(private router:Router) { }
  
    ngOnInit(): void {
    }
    addRow(){
      const lengthOfShopNames=this.shopNames.length;
      console.log(lengthOfShopNames)
      const  getLastValue=this.shopNames[lengthOfShopNames-1]
      console.log(getLastValue)
      const ipFromPrompt=prompt("please enter a shop name");
      if(ipFromPrompt !=null){
        this.opFromPrompt=ipFromPrompt
      }
      const dataObj={
        sl:getLastValue.sl+1,
        name:this.opFromPrompt
      }
      console.log(dataObj)
      this.shopNames.push(dataObj)
    }
     onstore(a:any){
       this.selectstore=this.shopNames
       console.log(a);
       this.router.navigate(['/closingstock']);


     }
  }
  