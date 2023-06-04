import './ContactSection.scss';

interface IContact {
  label: string;
  image: string;
  link: string;
}

interface IContactSection {
  contacts: IContact[];
}

const ContactSection = ({ contacts }: IContactSection) => {
  return (
    <div className='contact-section'>
      <div className='heading'>CONTACT {'/>'}</div>
        <div className='timeline'>
        <div className='line'/>
      </div>
      <div className='contact-content'>
        <div className='contact-content-title'>Find Me On:</div>
        <div className='contacts'>
          {
            contacts.map(contact => (
              <a href={contact.link} target='_blank' rel="noreferrer">
                <div className='contact'>
                  <img alt={contact.label} src={contact.image} />
                  <div>{contact.label}</div>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ContactSection;
