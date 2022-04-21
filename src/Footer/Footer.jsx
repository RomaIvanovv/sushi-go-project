import Contacts from './Contacts/Contacts';
import './Footer.css'
import SocialNetworks from './SocialNetworks/SocialNetworks';
import Streets from './Streets/Streets';

const Footer = () => {
    return (
        <div className='footer'>
            <SocialNetworks />
            <Streets />
            <Contacts />
        </div>
    )
}

export default Footer;