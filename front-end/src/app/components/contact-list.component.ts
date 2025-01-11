import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { GetContacts, DeleteContact } from '../state/contact.actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Contact[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetContacts());
    this.contacts$ = this.store.select((state) => state.contacts.contacts);
  }

  editContact(contact: Contact) {
    console.log('Edit contact', contact);
  }

  deleteContact(contactId: number | undefined): void {
    if (contactId !== undefined) {
      this.store.dispatch(new DeleteContact(contactId));
    } else {
      console.error('Contact ID is undefined');
    }
  }
}
