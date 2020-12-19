import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
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
selectshop:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   onshop(a:any){
    this.selectshop=this.shopNames;
    console.log(a);
    this.router.navigate(['/booke']);

   }
}
 