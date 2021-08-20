import { ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'otpscreen';
  msg1 = 'digit match';
  msg2 = 'otp not match';
  msg3 = 'wait...';
  array: any[] = [];
  inputValue: any;
  count = 6;
  value:any;
  otpValue: any;

  @ViewChildren('form') rows: any;
  @ViewChildren('val') button: any;

  keyUpEvent(event:any, index:any) {
    // console.log(event);
    this.inputValue = event.target.value;
    // console.log(this.inputValue);
    let position = index;
    if (event.keyCode === 8 && event.which === 8) {
      position = index - 1 ;
    } else {
      position = index + 1 ;
    }
    if (position > -1 && position < this.formInput.length ) {
     this.rows._results[position].nativeElement.focus();
    }
   }

   formInput = ['firstInput', 'secondInput', 'thirdInput', 'fourthInput'];
  
   onSubmit(){
    console.log(this.array);
    this.value = this.array.join('')
    console.log('value',this.value);
    this.otpValue = '4444';
    console.log('custom otp',this.otpValue);
    
    if(this.otpValue == this.value){
      alert("correct");
    }
      else if(this.otpValue !== this.value){ 
        alert("not match")
        this.count--
        console.log('count',this.count);
      }
      if(this.count==0){
      this.button.first.nativeElement.disabled = true;  
      }
   }
}
