import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/YèmipsdLogo.png'
import notification from '../assets/images/NotificationBing.svg'
import menu from '../assets/images/Menu.svg'
import reduireFenetre from '../assets/images/reduire-la-fenetre.png'
import fermerFenetre from '../assets/images/close.svg'
import helpecircle from '../assets/images/Helpcircle.svg'
import closeMenu from '../assets/images/back.svg'
import personcircle from '../assets/images/personcircle.svg'
import mobile from '../assets/images/mobile.svg'
import share from '../assets/images/share.svg'
//import styled from 'styled-components'
import '../assets/css/header.css'

/*const headerStyle = styled.header`
        width:100%
        display:flex;
    `
    */

function Header() {
    const [menuStatus, setMenuStatus] = useState(false)

    const displayMenu = () =>{
        setMenuStatus(true)
    }

    const hiddenMenu = () =>{
        setMenuStatus(false)
    }

    return (
        <header>
            <img src={logo} alt='Le logo de yèmi'/>
            <div>
                <ul>
                    <li>
                        <img src={notification} alt="L'icone de notification"/>
                        <Link to="/">Notification</Link>
                    </li>
                    <li onClick={displayMenu}>
                        <img src={menu} alt='Le menu'/>
                        <Link to="/">Menu</Link>
                    </li>
                    <li>
                        <img style={{width:'30px'}} src={reduireFenetre} alt='Réduire la fenêtre'/>
                    </li>
                    <li>
                        <img src={fermerFenetre} alt='Férmer la fenêtre'/>
                    </li>
                </ul>
            </div>

            <div className='menu' style={{right: menuStatus ? '0px' : '-200%', display: menuStatus? 'flex' : 'none', transition: menuStatus? 'ease-in-out 1s' : 'ease-in-out 1s'}}>
                <div className='box1'>
                    <img onClick={hiddenMenu} src={closeMenu} alt='icone pour fermer le menu'/>
                    <div className='infos'>
                        <img src={personcircle} alt='icone personne'/>
                        <div className='infosConnexion'>
                            <h3>Vous êtes connecter</h3>
                            <p>johndoe@gmail.com</p>
                            <button>SE DECONNECTER</button>
                        </div>
                    </div>
                </div>

                <div className='box2'>
                    <div className='col1'>
                        <img src={mobile} alt='icone mobile'/>
                        <p>Version mobile</p>
                        <img src={share} alt='icone partage'/>
                    </div>
                    <hr/>
                    <div className='col2'>
                        <img src={helpecircle} alt="icone d'aide"/>
                        <p>Assistance</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;