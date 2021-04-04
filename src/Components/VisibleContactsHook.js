import { useState } from 'react';
import ContactElement from './VisibileContacts/';
import s from './VisibileContacts.module.scss';
import { connect } from 'react-redux';
import action from '../redux/contacts/contacts-operation';
import { useEffect } from 'react';

const VisibleContactsHook = ({ data, deleteContact, getContact }) => {
  const [filter, setFilter] = useState('');
  const findContact = () => {
    const contacts = data.contacts;
    const filtered = contacts.filter(contact => contact.name === filter);
    return filtered;
  };

  const handleContactFinder = e => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    getContact();
    data.contacts.map(data => console.log('THIS', data.number));
    console.log(data.contacts);
  }, []);

  const findContacts = findContact();

  return (
    <>
      <h2>Contacts</h2>

      <p>Find contact</p>
      <input
        type="text"
        placeholder="enter name"
        onChange={handleContactFinder}
        value={filter}
      ></input>

      <p>{findContacts.map(({ name }) => name)}</p>

      <ul className={s.list}>
        {data.contacts.map(data => (
          <ContactElement
            name={data.name}
            number={data.number}
            key={data.id}
            deleteContact={deleteContact}
            id={data.id}
          />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(action.deleteContacts(id)),
    getContact: () => dispatch(action.getContacts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibleContactsHook);
