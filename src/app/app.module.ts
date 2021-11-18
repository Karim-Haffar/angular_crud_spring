import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes , RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientJsonpModule, HttpClientModule, JsonpClientBackend } from '@angular/common/http';
import { ContactServices } from '../services/contact.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';


const appRoutes: Routes = [

  {path: "about" ,component : AboutComponent},
  {path:"contacts" , component : ContactsComponent},
  {path:"edit-contact/:id" , component : EditContactComponent},
  {path:"new-contact" , component : NewContactComponent},

  {path: "", redirectTo:"/about", pathMatch: "full"}

];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
     // import HttpClientModule after BrowserModule.
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
