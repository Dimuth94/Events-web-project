import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  nametxt:String;
  emailtxt:string;
  sujecttx:string;
  msgtxt:string;

  constructor(public db:AngularFireDatabase) { }

  ngOnInit() {
  }

  submitfunc(){
    try{

      this.db.list('/userReq/').push({

        name: this.nametxt,
        email: this.emailtxt,
        subject: this.subjecttxt,
        message: this.msgtxt

      });
      
      this.nametxt="";
      this.emailtxt="";
      this.subjecttxt="";
      this.msgtxt="";

    }
    catch(error){
      
      this.nametxt="";
      this.emailtxt="";
      this.subjecttxt="";
      this.msgtxt="";


    }

}
}
