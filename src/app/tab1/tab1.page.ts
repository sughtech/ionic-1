import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { HandleDBService } from '../handleDB.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  contacts: Contact[];

  constructor(private handleDBService: HandleDBService) {}

  ngOnInit(): void {
    this.fetchContacts();
  }

  fetchContacts(){
    this.handleDBService.fetchContacts().then(contacts => {
      this.contacts = contacts;
    });
  }

  refreshList(){
    this.contacts = undefined;
    this.fetchContacts();
  }

}
