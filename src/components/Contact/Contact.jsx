
import { FaPhone } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import css from './Contact.module.css'
import { useDispatch } from 'react-redux'
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({contact}) => {

  const dispatch = useDispatch();
const handleDelete = () => {
  dispatch(deleteContact(contact.id))
}

  return (
      <div className={css.wrap}>
          <div className={css.wraper}>
                <div className={css.line}>
                  {<BsFillPersonFill/>}{contact.name}
                </div>
        
                <div className={css.line}>
                  {<FaPhone/>} {contact.number}
                </div>
          </div>
                <button className={css.btn} onClick={handleDelete}>Delete</button>
      </div>
  )
}

export default Contact
