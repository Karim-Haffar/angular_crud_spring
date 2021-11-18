import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Contact } from '../../model/model.contact';
import { ContactServices } from '../../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  mode:number=1;
  contact:Contact =new Contact();
  idContact:number;

  constructor(public activatedRoute:ActivatedRoute ,
               public contactsService:ContactServices,
               public route:Router ) {

    this.idContact=activatedRoute.snapshot.params['id'];

   }

  ngOnInit(): void {
    this.contactsService.getContact(this.idContact).subscribe((data:any)=>{
      this.contact=data;
    })

  }

updateContact(){
this.contactsService.updateContact(this.contact).subscribe(
  (data:any)=>{
    alert("Mis a jour effectué");
    this.route.navigate(['contacts']);
  }
)
}


}
