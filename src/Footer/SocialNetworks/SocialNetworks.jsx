import './SocialNetworks.css'
import { FaFacebookF, FaMailBulk, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import delivery from '../../Images/delivery.png'

const SocialNetworks = () => {
    return (
        <div className='posterSocial'>
            <div className='poster'>
                <img src={delivery}/>
                <h1>SUSHI-GO</h1>
                <h4>найшвидша доставка суші</h4>
            </div>
            <div className='social'>
                <div className='facebook'>
                    <a href="https://www.facebook.com/">
                        <i><FaFacebookF /></i>
                    </a>
                </div>
                <div className='mail'>
                    <a href="https://www.ukr.net/">
                        <i><FaMailBulk /></i>
                    </a>
                </div>
                <div className='instagram'>
                    <a href="https://www.facebook.com/">
                        <i><FaInstagram /></i>
                    </a>
                </div>
                <div className='tiktok'>
                    <a href="https://www.tiktok.com/">
                        <i><FaTiktok /></i>
                    </a>
                </div>
                <div className='youtube'>
                    <a href="https://www.youtube.com/">
                        <i><FaYoutube /></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialNetworks;