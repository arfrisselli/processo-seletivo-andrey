export class GetContacts {
  static readonly type = '[Contact] Get Contacts';
}

export class AddContact {
  static readonly type = '[Contact] Add Contact';
  constructor(public payload: any) {}
}

export class UpdateContact {
  static readonly type = '[Contact] Update Contact';
  constructor(public payload: any) {}
}

export class DeleteContact {
  static readonly type = '[Contact] Delete Contact';
  constructor(public id: number) {}
}
