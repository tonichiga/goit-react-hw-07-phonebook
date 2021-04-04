import s from './VisibileContactsComponent.module.scss';

const ContactElement = ({ name, number, deleteContact, id }) => {
  return (
    <li className={s.contactElement}>
      <div className={s.contactWrapper}>
        <p className={s.contactName}>{name}</p>
        <p>{number}</p>
      </div>
      <button className={s.contactButton} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
export default ContactElement;
