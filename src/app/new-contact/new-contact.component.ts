import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/model.contact';
import { ContactServices } from '../../services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

contact :Contact=new Contact();
mode:number=1;

  constructor(public contactservice:ContactServices) { }

  ngOnInit(): void {
  }

  saveContact(){
this.contactservice.saveContacts(this.contact).subscribe((data:any)=>{
this.contact=data;
this.mode=2;  })

}

}
