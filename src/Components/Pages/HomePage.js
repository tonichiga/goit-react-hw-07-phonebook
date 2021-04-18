// import InputForm from '../InputForm';
// import ContactList from '../ContactList';
import { getLoading } from '../../redux/contacts/contacts-selector';
import { connect } from 'react-redux';

const HomePage = ({ isLoading }) => {
  return (
    <>
      <h1>Wellcome</h1>
      {/* <div className="App">
        {isLoading && <h1>Loading...</h1>}
        <InputForm />
        <ContactList />
      </div> */}
    </>
  );
};

const mapStateToProps = state => {
  return { isLoading: getLoading(state) };
};

export default connect(mapStateToProps, null)(HomePage);
