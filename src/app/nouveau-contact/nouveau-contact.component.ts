import { Component, OnInit } from '@angular/core';
import { ContactServices } from '../../services/contact.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.scss']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactService:ContactServices) { }

  ngOnInit(): void {
  }

  onsaveContact(dataForm:any)
  {
this.contactService.saveContacts(dataForm).subscribe(
  (data:any)=>{

console.log(data);

  }
)  }

}
