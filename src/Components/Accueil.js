import React from 'react';
//import styled from 'styled-components'
import '../assets/css/accueil.css'

function Accueil() {
    /*const sectionStyle = styled.section`
        display:flex;
        align-items:center;
        justify-content:center;
    `*/
    return (
        <section>
            <div className='description'>
                <h1>JE SUIS YEMI</h1>
                <p>
                    Je suis Yemi, votre assistante virtuelle
                </p>
            </div>

            <div className='btnContainer'>
                <div className='box1'>
                    <button className='btn1'>Démo</button>
                </div>
                <div className='box2'>
                    <button className='btn1'>Démarrer</button>
                    <button className='btn2'>Tutoriel</button>
                </div>
            </div>
        </section>
    );
}

export default Accueil;