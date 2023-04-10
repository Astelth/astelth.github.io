import { Component } from '@angular/core';
import {CONTACTS_LIST_ITEMS} from '../constants';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  items = CONTACTS_LIST_ITEMS;
}
