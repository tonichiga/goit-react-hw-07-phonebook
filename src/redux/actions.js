const getContacts = contact => ({
  type: 'contacts',
  payload: contact,
});

const addContact = contact => {
  return { type: 'addContact', payload: contact };
};

const deleteContacts = id => {
  return { type: 'deleteContacts', payload: id };
};

export { addContact, getContacts, deleteContacts };
