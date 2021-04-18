import ContactElement from '../ContactElement';
import s from '../../Components/styles/page/ContactList.module.scss';
import { connect } from 'react-redux';
import action from '../../redux/contacts/contacts-operation';
import { useEffect } from 'react';
import { getData, changeFilter } from '../../redux/contacts/contacts-selector';
import InputForm from '../InputForm';
import { getLoading } from '../../redux/contacts/contacts-selector';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

const VisibleContactsHook = ({
  data,
  deleteContact,
  getContact,
  filterContacts,
  filtered,
  isLoading,
}) => {
  const classes = useStyles();

  const contacts = data.contacts.contacts;

  const filterContact = contacts.filter(contact => filtered === contact.name);

  const handleContactFinder = e => {
    filterContacts(e.target.value);
  };

  useEffect(() => {
    getContact();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && (
        <Loader
          className={classes.loader}
          type="Rings"
          color="red"
          height={100}
          width={100}
        />
      )}
      <h1>Это главная страница Phonebook</h1>

      <InputForm />

      <h2>Список контактов</h2>
      <div className={s.findContactsWrapper}>
        <p>Найти контакт</p>
        <input
          type="text"
          placeholder="enter name"
          onChange={handleContactFinder}
          // value={filter}
        ></input>
        <p>{filterContact.map(({ name }) => name)}</p>
      </div>

      <ul className={s.list}>
        {data.contacts.contacts.map(data => (
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
    isLoading: getLoading(state),
    data: getData(state),
    filtered: changeFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(action.deleteContacts(id)),
    getContact: () => dispatch(action.getContacts()),
    filterContacts: data => dispatch(action.operationFilterContacts(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibleContactsHook);
