import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddContact, UpdateContact } from '../state/contact.state';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.contactForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      type: ['Física', Validators.required],
    });
  }

  submit() {
    if (this.contactForm.valid) {
      const contact = this.contactForm.value;
      if (contact.id) {
        this.store.dispatch(new UpdateContact(contact));
      } else {
        this.store.dispatch(new AddContact(contact));
      }
      this.contactForm.reset();
    }
  }
}
