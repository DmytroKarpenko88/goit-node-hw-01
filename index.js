const argv = require('yargs').argv;

const contacts = require('./contacts');

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case 'get':
      // ... id
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      const removeContact = await contacts.removeContact(id);
      console.log('removeContact:', removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
