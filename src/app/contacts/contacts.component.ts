import { Component, OnInit } from '@angular/core';
//import "rxjs/add/operator/map";
//import 'rxjs';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ContactServices } from '../../services/contact.service';
import { Router } from '@angular/router';
import { Contact } from 'src/model/model.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  httpClient: any;

pageContacts: any;
motCle:string ="";
currentPage:number =0;
size: number =5;

pages:any; //Array<number>


  constructor (public http: HttpClient,
               public contactServices:ContactServices ,
                public router:Router) {}

  ngOnInit() {
   this.contactServices.getContacts(this.motCle,this.currentPage,this.size).subscribe(
     (data:any) =>{
    this.pageContacts=data ;
    this.pages=new Array(data?.totalPages);
    } )

  }


  doSearch(){
    this.contactServices.getContacts(this.motCle,this.currentPage,this.size).subscribe( data =>this.pageContacts=data )

  }

   chercher(){
    this.doSearch();

  }


  gotoPage(i:number){
this.currentPage=i;
this.doSearch();
  }

  onEditContact(id:number){
    this.router.navigate(['edit-contact',id])

  }

  onDeleteContact(c:Contact){
    let confirm=window.confirm("Etes vous sure de vouloire supprimer?");
    if (confirm == true)
    {
      this.contactServices.deleteContact(c.id).subscribe(
        (data:any)=>{
          this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(c),1
          );


        }
      )

    }


  }

}












