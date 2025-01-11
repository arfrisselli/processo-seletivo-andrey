import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { GetContacts, AddContact, UpdateContact, DeleteContact } from './contact.actions';

export interface ContactStateModel {
  contacts: Contact[];
}

@State<ContactStateModel>({
  name: 'contacts',
  defaults: {
    contacts: [],
  },
})
@Injectable()
export class ContactState {
  @Selector()
  static contacts(state: ContactStateModel): Contact[] {
    return state.contacts;
  }

  @Action(GetContacts)
  getContacts(ctx: StateContext<ContactStateModel>) {
    const contacts: Contact[] = [
      { id: 1, name: 'João Silva', cpf: '12345678901', email: 'joao@email.com', type: 'Física' },
      { id: 2, name: 'Maria Oliveira', cpf: '98765432100', email: 'maria@email.com', type: 'Física' },
    ];
    ctx.setState({ contacts });
  }

  @Action(AddContact)
  addContact(ctx: StateContext<ContactStateModel>, { payload }: AddContact) {
    const state = ctx.getState();
    ctx.setState({
      contacts: [...state.contacts, payload],
    });
  }

  @Action(UpdateContact)
  updateContact(ctx: StateContext<ContactStateModel>, { payload }: UpdateContact) {
    const state = ctx.getState();
    const updatedContacts = state.contacts.map((contact) =>
      contact.id === payload.id ? payload : contact
    );
    ctx.setState({ contacts: updatedContacts });
  }

  @Action(DeleteContact)
  deleteContact(ctx: StateContext<ContactStateModel>, { id }: DeleteContact) {
    const state = ctx.getState();
    const filteredContacts = state.contacts.filter((contact) => contact.id !== id);
    ctx.setState({ contacts: filteredContacts });
  }
}

export { GetContacts, AddContact, UpdateContact, DeleteContact };