import {React} from 'react';
import modeSombre from '../assets/images/dark_mode.svg'
import '../assets/css/footer.css'

function Footer() {

    
    return (
        <div className='footer'>
            <div className='mode'>
                <img src={modeSombre} alt='Mode sombre'/>
                <p>Mode Sombre</p>
            </div>
        </div>
    );
}

export default Footer;