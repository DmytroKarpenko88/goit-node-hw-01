const fs = require('fs/promises');

const path = require('path');

//   Розкоментуй і запиши значення
const contactsPath = path.join(__dirname, 'db/contacts.json');

// TODO: задокументувати кожну функцію
async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const allContacts = await listContacts();
  const result = allContacts.find(item => item.id === String(contactId));
  return result || null;
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const allContacts = await listContacts();
  const index = allContacts.findIndex(item => item.id === String(contactId));
  if (index === -1) return null;
  console.log('allContacts:', allContacts.length);

  const result = allContacts.splice(index, 1);
  console.log('allContacts after:', allContacts.length);
  return result;
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}

getContactById('05olLMgyVQdWRwgKfg5J6');

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
