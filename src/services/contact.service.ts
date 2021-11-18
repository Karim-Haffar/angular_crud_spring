import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Contact } from "src/model/model.contact";

@Injectable()

export class ContactServices{

constructor(public http:HttpClient ){

}

getContacts(motCle:string,page:number,size:number){
  return this.http.get("http://localhost:8080/chercherContacts?mc="+motCle+"&size"+size+"&page="+page).
  pipe( map (response =>response  ));


}


getContact(id:number){
  return this.http.get("http://localhost:8080/contacts/"+id).
  pipe( map (response =>response  ));


}


saveContacts(contact:Contact){
  return this.http.post("http://localhost:8080/contacts",contact).
  pipe( map (response =>response  ));
}

updateContact(contact:Contact){
  return this.http.put("http://localhost:8080/contacts/"+contact.id,contact).
  pipe( map (response =>response  ));
}

deleteContact(id:number){
  return this.http.delete("http://localhost:8080/contacts/"+id).
  pipe( map (response =>response  ));
}

}
