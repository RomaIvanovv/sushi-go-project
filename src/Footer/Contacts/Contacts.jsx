import './Contacts.css';
import { FaPhoneAlt } from 'react-icons/fa';

const Contacts = () => {
    return (
        <div className='contacts'>
            <div>
                <i><FaPhoneAlt /></i>
                <p>093 232 10 59</p>
            </div>
                <a href="https://www.linkedin.com/in/roma-ivanov-5247b2235/">
                    Розробка сайтів by Roma Ivanov
                </a>
        </div>
    )
}

export default Contacts;