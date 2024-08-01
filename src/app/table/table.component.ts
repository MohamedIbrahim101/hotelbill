import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { count, map, startWith } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { interval } from 'rxjs';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { DialogComponent } from '../dialog/dialog.component';
import { HttpClient } from '@angular/common/http';
import { TitleStrategy } from '@angular/router';


export interface PeriodicElement {
  name: string;
  id: number;
  quantity: number;
  price: number;
  amount: number;

}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


    
  @Input() item :any= '';
  @Input() tableno :any= '';
  

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe :any;
  timeWithPipe : any;


  // LocalDate : string = Date();
  

  // LocalDate : string = Date();

  ELEMENT_DATA: PeriodicElement[] = [

    { id: 1, name: ' Mutton Briyani', quantity: 0, price: 140, amount: 0 },
    { id: 1, name: 'Diary Milk Box', quantity: 0, price: 325, amount: 0 },
    { id: 1, name: 'Diary Milk', quantity: 0, price: 5, amount: 0 },
    { id: 1, name: 'Paper Plate', quantity: 0, price: 30, amount: 0 },
    { id: 1, name: 'TRI-PLY VACCUM', quantity: 0, price: 800, amount: 0 },

    // { id: 1, name: 'Action', quantity: 0, price: 500, amount: 0, stock:10 },
    // { id: 2, name: 'Magnet', quantity: 0, price: 350, amount: 0, stock:4},
    // { id: 3, name: 'Axor Rage Tiger ', quantity: 0, price: 3410, amount: 0, stock:1},
    // { id: 4, name: 'Axor Apex XBHP 299', quantity: 0, price: 6500, amount: 0, stock:2},
    // { id: 5, name: 'Axor Apex Solid ', quantity: 0, price: 4994, amount: 0 },
    // { id: 6, name: 'Studds Chrome Economy-L', quantity: 0, price: 995, amount: 0 },
    // { id: 7, name: 'Studds Premium Vent', quantity: 0, price: 1230, amount: 0 },
    // { id: 8, name: 'Studds  Thunder  ', quantity: 0, price: 1985, amount: 0 },
    // { id: 10, name: 'Studds NINJA ELITE', quantity: 0, price: 1395, amount: 0 },
    // { id: 11, name: 'Studds CREST ECO ', quantity: 0, price: 965, amount: 0 },
    // { id: 12, name: 'Studds Chrome Economy-XL', quantity: 0, price: 1075, amount: 0 },
    // { id: 13, name: 'Studds RAY', quantity: 0, price: 895, amount: 0 },
    // { id: 14, name: 'Studds CUB ', quantity: 0, price: 1195, amount: 0 },
    // { id: 15, name: 'Studds DRIFTER ', quantity: 0, price: 2550, amount: 0 },
    // { id: 16, name: 'Studds CUB D4', quantity: 0, price: 1445, amount: 0 },
    // { id: 17, name: 'Studds PROFESSIONAL', quantity: 0, price: 1240, amount: 0 },
    // { id: 18, name: 'Studds JADE', quantity: 0, price: 1070, amount: 0 },
    // { id: 19, name: 'Studds CHROME ELITE ', quantity: 0, price: 1150, amount: 0 },
    // { id: 20, name: 'Vega ASTER TF', quantity: 0, price: 890, amount: 0 },
    // { id: 21, name: 'Vega Blaze DX ', quantity: 0, price: 1088, amount: 0 },
    // { id: 22, name: 'Vega ATOM-MB', quantity: 0, price: 998, amount: 0 },
    // { id: 23, name: 'Vega CLIFF TF', quantity: 0, price: 998, amount: 0 },
    // { id: 24, name: 'Vega EDGE TF ', quantity: 0, price: 998, amount: 0 },
    // { id: 25, name: 'Vega BOLT OCTOPUS', quantity: 0, price: 1997, amount: 0 },
    // { id: 26, name: 'vega RYKER D/V ATTIC ', quantity: 0, price: 1898, amount: 0 },
    // { id: 27, name: 'Vega BOLT BUNNY', quantity: 0, price: 1997, amount: 0 },
    // { id: 28, name: 'Vega CURISER W/P', quantity: 0, price: 1088, amount: 0 },
    // { id: 29, name: 'Vega CRUX OF', quantity: 0, price: 998, amount: 0 },
    // { id: 30, name: 'Vega EVO', quantity: 0, price: 998, amount: 0 },
    // { id: 31, name: 'Vega BOLT DX', quantity: 0, price: 1799, amount: 0 },
    // { id: 32, name: 'Vega BREEZE TF', quantity: 0, price: 899, amount: 0 },
    // { id: 33, name: 'Vega CRUX DX DUAL VISOR', quantity: 0, price: 1592, amount: 0 },
    // { id: 34, name: 'Vega CURX TF ', quantity: 0, price: 1358, amount: 0 },
    // { id: 35, name: 'Vega LARK', quantity: 0, price: 1196, amount: 0 },
    // { id: 36, name: 'Vega ATOM-k', quantity: 0, price: 890, amount: 0 },
    // { id: 37, name: 'Steelbird SBA-21', quantity: 0, price: 1099, amount: 0 },
    // { id: 38, name: 'Steelbird SBS-21 ISS', quantity: 0, price: 1799, amount: 0 },
    // { id: 39, name: 'Studds CHROME-DELUXE', quantity: 0, price: 945, amount: 0 },
    // { id: 40, name: 'ATIF-1', quantity: 0, price: 500, amount: 0 },
    // { id: 41, name: '02', quantity: 0, price: 900, amount: 0 },
    // { id: 42, name: 'O2 PRO', quantity: 0, price: 1000, amount: 0 },
    // { id: 43, name: 'ATIF 2', quantity: 0, price: 400, amount: 0 },
    // { id: 44, name: 'HCR-C', quantity: 0, price: 350, amount: 0 },

   
  ];
  
  displayedColumns: string[] = ['id', 'name', 'quantity', 'price', 'amount', 'delete'];
  dataSource = new MatTableDataSource([]);
  actualdata = {}
  data: any = []
  clientProductForm: any;
  dataToDisplay: any;
  temp_id: any;
  temp_name: any;
  temp_val: any;
  temp_data: any;
  total_amount:any|number;
  product_array: any;
  Date: any;
  GST: any;
  new_gst: any;
  gst: any;
  currency="₹"
  tot_qu: any;
  tot_quantity: any;
  name: any;
  baseUrl: any;
  result: any;
  final: any;
  stock_val: any;
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(this.myControl.value)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  amount: any ;
  quantity: any | number = "";
  // changeName(event: Event) {
    

  //   for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
  //     if (this.ELEMENT_DATA[i].name == this.product_name) {
  //       this.ELEMENT_DATA[i].quantity = this.quantity;
  //       this.ELEMENT_DATA[i].amount = this.ELEMENT_DATA[i].quantity * this.ELEMENT_DATA[i].price
  //     }

  //   }
    
  // }
  
  

product_name:any;
  options: string[] = [];
  myControl = new FormControl;
  filteredOption: Observable<string[]> | undefined;

  onSelectionChange(value: any) {
    let temp_name
    let temp_id = 0
    let temp_data
    
    // console.log(this.item);
console.log(this.data);


    
    for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
      if (this.ELEMENT_DATA[i].name == value) {
        this.actualdata = this.ELEMENT_DATA[i];
        this.data.push(this.actualdata);
        temp_id=this.ELEMENT_DATA[i].id
        temp_name=this.ELEMENT_DATA[i].name
        temp_data=this.ELEMENT_DATA[i]
  
      }
    }
    

   
  

    console.log(this.actualdata)
    console.log(this.data)
  
    // this.http.post('http://localhost/bill/bill.php',this.data).subscribe(
    //   (response) => console.log(response),
    //     (error) => console.log(error)
      
    // )



    console.log(this.dataSource.data)
    // console.log(this.temp_id)
    // console.log(this.temp_name)
    console.log(this.temp_val)
    this.product_name = value
    this.myControl.setValue("")
    this.openDialog(temp_id , temp_name)
    
    
   

   
  }
  
 
 
  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: string) => option.toLowerCase().includes(filterValue));
  }
 

  constructor(public dialog : MatDialog, private http : HttpClient) {}
 



openDialog (newVal:any, temp_name:any){
  const dialogRef = this.dialog.open(DialogComponent, {
    data: { name:temp_name, id:newVal },
    disableClose:true,
  //   position: {
  //     top: '25vh',
  //     left: '40vw'
  // },
});
  dialogRef.afterClosed().subscribe(result => {
    this.data=this.data.reduce((a: any[],b: { name: any; })=>{
      if(!a.find(data=>data.name===b.name)){
        a.push(b);
      }
      return a;
    },[]);

    this.dataSource = new MatTableDataSource(this.data)
      for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
      if (this.ELEMENT_DATA[i].id == result.id) {
        this.ELEMENT_DATA[i].quantity = result.quantity;
        
        this.ELEMENT_DATA[i].amount = this.ELEMENT_DATA[i].quantity * this.ELEMENT_DATA[i].price
        // console.log(this.stock_val);
        
      }

    }
   

  });

}






// PrintDialog (): void {
//   const dialogRef = this.dialog.open(PrintComponent, {
// data : { print: 'mohamed' },
//   });

// }




  ngOnInit(): void {
  
  

   
{
    this.todayWithPipe = this.pipe.transform(Date.now(), 'yyyy-MM-dd');


  }

{this.timeWithPipe = this.pipe.transform(Date.now(), 'h:mm:ss a');}
    this.filteredOption = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

    for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
      this.options.push(this.ELEMENT_DATA[i].name)
    }
  
  }


 


 
  getTotalAmount() {
    let tot_val = 0
    for(let i=0;i<this.dataSource.data.length;i++)
    {
        tot_val = tot_val + this.dataSource.data[i]['amount']
    }
    this.total_amount=tot_val;
    return tot_val;

  }
  getTotalQuantity(){
    let tot_qu = 0
    for(let i=0;i<this.dataSource.data.length;i++)
    { 
      tot_qu = tot_qu + this.dataSource.data[i]['quantity']
    }
    return tot_qu
  }

  getTotalProduct(){
    let tot_pro= 0
    for(let i=0;i<this.dataSource.data.length;i++)
    {
     tot_pro = this.data.length; 
    }
    return tot_pro
  }
  deleteProduct(element: any) {
    this.data.forEach((item: any, index: any) => {
      if (item == element) this.data.splice(index, 1);
    })
    
    console.log(this.getTotalAmount())
    //update table
    this.dataSource = new MatTableDataSource(this.data)
  }
  


  printDialog(): void {
    
    // const dialogRef = this.dialog.open(PrintComponent, {
      
      
    //   data:{
    //     totalamount:this.total_amount,
    //     tableno:this.tableno,
    //     waiter:this.item,
    //     print:this.dataSource.data 
    //   },
      
  
    // });
  
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
      // console.log(this.stock());
  }
 
  

  Print_bill(){


    // this.ELEMENT_DATA[i].quantity
    this.http.post('http://localhost/bill/bill.php',this.data).subscribe(
      (response) => console.log(response),
        (error) => console.log(error)
      
    )
   
    this.GST ='5.00'
     this.new_gst=this.GST/2;

    this.gst=this.total_amount*5/100;
 console.log(this.gst);
    // window.print();
    let totalamount:number=this.total_amount;
    let  tableno:number =this.tableno;
     let waiter:number=this.item;
     let print:any=this.dataSource.data ;
    let getTotalQuantity:any=this.tot_quantity;
  
  //    LocalDate : new Date();
  //    {
    
  //     this.startClock();
  //   }
  //  this.startClock()
  //   interval(1).subscribe(data=>{
     
  //     this.LocalDate = Date(),'M-d-y';
  //   })
  
  let printContents, popupWin:Window | any, name_string, name,quantity_string,quantity,price_string,price,amount_string,amount;
  this.product_array =this.dataSource.data;
  if(this.product_array.length>0)
  {
  
    let temp_name = []
    // console.log(this.product_array)
    for (let i = 0; i < this.product_array.length; i++) {
      this.product_array[i]['name'] =  this.product_array[i]['name'] 
    }
  
    for (let i = 0; i < this.product_array.length; i++) {
      temp_name.push(this.product_array[i]['name'])
    }
  
    // console.log(this.product_array)
    name_string = temp_name.toString();
    console.log(name_string)
    name= name_string.replaceAll(',','<br>')
  
  
  
  
  
  
    
    let temp_quantity = []
    for (let i = 0; i < this.product_array.length; i++) {
      this.product_array[i]['quantity'] =  this.product_array[i]['quantity'] 
    }
  
    for (let i = 0; i < this.product_array.length; i++) {
      temp_quantity.push(this.product_array[i]['quantity'])
    }
  
    quantity_string = temp_quantity.toString();
    console.log(quantity_string)
    quantity = quantity_string.replaceAll(',','<br>')
  
  
  
  
    let temp_price = []
    for (let i = 0; i < this.product_array.length; i++) {
      this.product_array[i]['price'] =  this.product_array[i]['price'] 
    }
  
    for (let i = 0; i < this.product_array.length; i++) {
      temp_price.push(this.product_array[i]['price'])
    }
  
    price_string = temp_price.toString();
    console.log(price_string)
    price = price_string.replaceAll(',','<br>')
  
  
 
  
    let temp_amount = []
    for (let i = 0; i < this.product_array.length; i++) {
      this.product_array[i]['amount'] =  this.product_array[i]['amount']
    }
  
    for (let i = 0; i < this.product_array.length; i++) {
      temp_amount.push(this.product_array[i]['amount'])
    }

   
console.log(this.total_amount);

 
    
  
    amount_string = temp_amount.toString();
    console.log(amount_string)
    amount = amount_string.replaceAll(',','<br>')
    //printContents = document.getElementById('print-section').innerHTML;
     popupWin  = window.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
     popupWin.document.open();
    popupWin.document.write(`
    <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
  
  <style>
  // @page { size: 	210 x 297 mm}
  body.receipt .sheet { width: 210mm; height: 297mm }
  @media print {
    body.receipt {
       width: 200mm
    } 
  } 
  *{
    font-size:20px;
  }
      .head{
        font-weight: bold;
        font-size: 22px;
        text-decoration: dotted;
        color:red;
          text-align: center;     
          deco 
        
    }
    .receipt { 
      border: solid 5px;
    }
    .sub{
        font-weight: bold;
        font-size: 20px;
        text-align: center; 
        
        
    }
    .sub1{
     
      text-align: center; 
    }
    .sub2{
      text-align: center; 
    }
    .phone{
        font-weight: bolder;
        text-align: center; 
    }
    .main{
margin-left:18px;
    }
    hr{
      border: none;
      border-top:  solid black 2px;
      width: 100%;
  
  }
 
  .gst1{
    
    width:100%;
  }
 .date{
  margin-left:80px;
 }
   .time{
    margin-left:300px;
   }
   
   .tot{
    font-weight:bold;
    font-size:20px;
    text-align: center; 
    bottom:0px;
   }
   .thank{
    font-weight:bold;
    text-align: center; 
   }
   .pls{
    font-weight:bold;
    text-align: center; 
   }
   .gst{
    bottom:0px;
   }
   .boot
   {
    position:absolute;
    bottom:0px;
    margin-left:42%;
    font-weight:bold;
    font-size:30px;
   }
  
 
  </style>
  </head>
  <body class="receipt"  onload="window.print();window.close()">
  <div class="main">
  <h1 class="head">R R</h1>
  <P class="sub1">MUNICIPAL COMPLEX</P>
  <p class="sub2">TIRUNELVELI-TOWN</p>
  <h3 class="phone">PH-9791860181</h3>
  </div>
  <!-- <app-sales [WAITER]="waiter"></app-sales> -->
  
  <table>
  <tr>
  <td>



  
 </td>
  <br>
  </tr>
  </table>
  <table>
  <tr>
  <td>
  <p class="date">DATE:2024-03-23</p></td>
  <td >
  <p class="time">
  TIME:${this.timeWithPipe} </p></td>
  </tr>
  </table>
  <hr>
 <table class="gst1">
 <tr>
 <td style="font-weight:bold; text-align:center;">NAME
 <hr>
 </td>
 <td style="font-weight:bold; text-align:center;" >QUANTITY
 <hr>
 </td>
 <td style="font-weight:bold; text-align:center;" >PRICE
 <hr>
 </td>
 <td style="font-weight:bold; text-align:center;">AMOUNT
 <hr>
 </td>
 </tr>
 <tr>
 <td style="text-align:center">${name}</td>
<td style="text-align:center">${quantity}</td>
<td style="text-align:center">${price}</td>
<td style="text-align:center">${amount}</td>


</tr>




 </table>

  <hr>
  <p class="boot"> ${this.currency}${this.total_amount}.00</p>
 
  </body>
  </html>`);
  
    popupWin.document.close();
    
   }
  
  
else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'PLEASE SELECT YOUR PRODUCT',
   
  })
}


















  }

Kot_bill(){
  // window.print();
  let totalamount:number=this.total_amount;
  let  tableno:number =this.tableno;
   let waiter:number=this.item;
   let print:any=this.dataSource.data ;
  

//    LocalDate : new Date();
//    {
  
//     this.startClock();
//   }
//  this.startClock()
//   interval(1).subscribe(data=>{
   
//     this.LocalDate = Date(),'M-d-y';
//   })

  let printContents, popupWin:Window | any, pro_string, pro;
  this.product_array = this.dataSource.data;
  if(this.product_array.length>0){
  let temp_array = []
 console.log(this.product_array)
 
 for (let i = 0; i < this.product_array.length; i++){
    
 this.product_array[i]['description']=this.product_array[i]['quantity'] +  'x'  + this.product_array[i]['name'] + '= RS:' + this.product_array[i]['quantity'] * this.product_array[i]['price'] 
  }

  for (let i = 0; i < this.product_array.length; i++){
    temp_array.push(this.product_array[i]['description'])
  }
  console.log(this.product_array)
 pro_string = temp_array.toString();
    pro = pro_string.replaceAll(',', '<br>');
  console.log(pro_string);
  //printContents = document.getElementById('print-section').innerHTML;
   popupWin  = window.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
   popupWin.document.open();
  popupWin.document.write(`
  <html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>

<style>
@page { size: 72mm 120mm }
body.receipt .sheet { width: 120mm; height: 100mm }
@media print {
  body.receipt {
     width: 90mm
  } 
} 
    .head{
      font-weight: bold;
      font-size: 18px;
     
      color:red;
      margin-left:64px;
    
      
  }
  .sub{
      font-weight: bold;
      font-size: 12px;
      margin-left:87px;
      
  }
  .sub1{
   
    margin-left:55px;
  }
  .sub2{
   
    margin-left:66px;
  }
  .phone{
      font-weight: bolder;
      margin-left:64px;
  
  }
  .move{
 
  width:100%;
  margin-left:2px;
  }
 
  #date{
      margin-left:103px;
  
  }

  hr{
      border: none;
      border-top: 1px dashed;
      width: 100%;
  
  }
  #thank{
      font-weight: bold;
      text_align: center;
  }
.first{
     font-weight:bold;
     text_align center;
  }
  .one{
    margin-left: 0px;
  }
  .time{
    margin-left:67px;
  }
  .tot{
    font-weight:bold;
    margin-left:100px;
    font-size:20px;
  }
  .main{
    margin-left:10px;
  }
  .thank{
    font-weight:bold;
    margin-left:83px;
   }
   .pls{
    font-weight:bold;
    margin-left:32px;
   }
</style>
</head>
<body class="receipt"  onload="window.print();window.close()">
<div class="main">
<h1 class="head">AL MADHINA</h1>
<P class="sub">ALL IN ONE</P>
<P class="sub1">MAKILCHI NAGAR</P>
<p class="sub2">RETTIYARPATTI</p>
<h3 class="phone">PH-9791860181</h3>
</div>
<!-- <app-sales [WAITER]="waiter"></app-sales> -->
<div class="move">
<table>
<tr>
<td>
<p class="one" style="width:162px">WAITER:${this.item}</p></td>
<td>
<div class="table">TABLENO:${this.tableno}</div></td>
<br>
</tr>
</table>
<table>
<tr>
<td>DATE:${this.todayWithPipe} </td>
<td >
<p class="time">
TIME:${this.timeWithPipe} </p></td>
</tr>
</table>
</div>
<hr>
<div class="orders">
<div >
${pro}
</div>
<hr>
<p class="tot" >${this.currency}${this.total_amount}.00</p>
<p class="pls" >!PLEASE VISIT US AGAIN!</p>
<p class="thank">THANK YOU</p>
</body>
</html>`);

  popupWin.document.close();
  
 }

 else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'PLEASE SELECT YOUR PRODUCT',
   
  })
}  

}

// stock(){

//   for(let i=0;i<this.ELEMENT_DATA.length;i++)
//     {
//     }


//    }


}
