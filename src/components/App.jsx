import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { fetchContacts } from "../redux/contactsOps";
// import { selectContacts, selectError, selectLoading } from "../redux/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Loader from './Loader/Loader';



function App() {
 const dispatch = useDispatch();
 const isLoading = useSelector((state) => state.contacts.isLoading);
 const isError = useSelector((state) => state.contacts.error);

 useEffect(() => {
   dispatch(fetchContacts());
 }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader>Loading message</Loader>}
        {isError && <ErrorMessage />}
        <ContactList />
      </div>
    </>
  );
}

export default App;
