import './Contact.scss';
import { Footer } from '../../components';
import ContactSection from './ContactSection';
import { CONTACTS } from '../../constants/contact.constant';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <ContactSection
        contacts={CONTACTS}
      />
      <Footer />
    </div>
  );
};

export default Contact;
