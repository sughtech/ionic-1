import { Component } from "@angular/core";
import { HandleDBService } from '../handleDB.service';
import { Contact } from '../contact';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  contact: Contact = {
    name: "",
    phone: "",
    address: ""
  };
  
  constructor(private handleDBService: HandleDBService) {}

  addContact() {
    this.handleDBService.addContact(this.contact);
  }
}
