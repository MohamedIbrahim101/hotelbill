import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  quantity: any;
  tempval: any;
  name: any;


  constructor(public dialogRef: MatDialogRef<DialogComponent>,

    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
  changeName(event: Event) {
  this.quantity=Number((<HTMLInputElement>event.target).value);
  }
myEvent(evt:any){
  if(this.quantity>0 ){
  this.tempval={id:this.data['id'],quantity:this.quantity}
  this.dialogRef.close(this.tempval);
  }
}
Ok(){
  if(this.quantity>0 ){
    this.tempval={id:this.data['id'],quantity:this.quantity}
    this.dialogRef.close(this.tempval);
  }
  
}
}
