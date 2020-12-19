import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondtable',
  templateUrl: './secondtable.component.html',
  styleUrls: ['./secondtable.component.scss']
})
export class SecondtableComponent implements OnInit {
  shopNames=[
    {'sl':1,
      'shopname':'mahalaxmi general store',
      'closingstock':'10 oclock',
      'booking':'hyd',
      'paddingpayment':'on processing',
      'catalog':'xyzzz',
      'photoupload':'upload ur phpoto'
      

  },
  {'sl':2,
  'shopname':'mahalaxmi general store',
  'closingstock':'10 oclock',
  'booking':'hyd',
  'paddingpayment':'on processing',
  'catalog':'xyzzz',
  'photoupload':'upload ur phpoto'
  },
  {'sl':3,
  'shopname':'kirana general store',
  'closingstock':'11 oclock',
  'booking':'hayathnagar',
  'paddingpayment':'on processing',
  'catalog':'xyzzz',
  'photoupload':'upload ur phpoto'
  },
  {'sl':4,
  'shopname':'manikanta general store',
  'closingstock':'12 oclock',
  'booking':'dilshuknagar',
  'paddingpayment':'on processing',
  'catalog':'xyzzz',
  'photoupload':'upload ur phpoto'
  },
  {'sl':5,
  'shopname':'laxmi general store',
  'closingstock':'1 oclock',
  'booking':'kondapur',
  'paddingpayment':'on processing',
  'catalog':'xyzzz',
  'photoupload':'upload ur phpoto'
  },
  {'sl':6,
  'shopname':'maha general store',
  'closingstock':'2 oclock',
  'booking':'l.b.nagar',
  'paddingpayment':'on processing',
  'catalog':'xyzzz',
  'photoupload':'upload ur phpoto'
  },
//   {'sl':7,
//       'name':'XYZ5 Pvt Ltd'
//   },
//   {'sl':8,
//       'name':'XYZ6 Pvt Ltd'
//   },
//   {'sl':9,
//       'name':'XYZ7 Pvt Ltd'
//   },
//   {'sl':10,
//   'name':'XYZ1 Pvt Ltd'
// },
// {'sl':11,
//   'name':'ABC Pvt Ltd'
// },
// {'sl':12,
//   'name':'XYZ3 Pvt Ltd'
// },
// {'sl':13,
//   'name':'XYZ4 Pvt Ltd'
// },
// {'sl':14,
//   'name':'XYZ5 Pvt Ltd'
// },
// {'sl':15,
//   'name':'XYZ6 Pvt Ltd'
// },
// {'sl':16,
//   'name':'XYZ7 Pvt Ltd'
// },
// {'sl':17,
// 'name':'XYZ1 Pvt Ltd'
// },
// {'sl':18,
// 'name':'ABC Pvt Ltd'
// },
// {'sl':19,
// 'name':'XYZ3 Pvt Ltd'
// },
// {'sl':20,
// 'name':'XYZ4 Pvt Ltd'
// },
// {'sl':21,
// 'name':'XYZ5 Pvt Ltd'
// }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
