import {Formik, Form, Field, ErrorMessage} from 'formik'
import css from './ContactForm.module.css';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    number: Yup.number()
      .min(2, "Too short!")     
      .required("Required!")
  })


  const initialValues = {
    name: "",
    number: "",
    id: ""
  }
  
  const dispatch = useDispatch();


  const handleSubmit = (data, formActions) => {
    dispatch(addContact(data))
    formActions.resetForm();
  }


  return (
    <Formik validationSchema={contactSchema} initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field className={css.input} type='text' name='name' />
          <ErrorMessage className={css.error} name='name' component='span'/>
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field className={css.input} type='number' name='number' />
          <ErrorMessage className={css.error} name='number' component='span'/>
        </label>
        
        <button className={css.button} type='submit'>Add contact</button>
      </Form>
      </Formik>
  )
}

export default ContactForm