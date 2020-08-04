import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/58298590?s=460&u=1d8a37bc92329f3256f2b785e8d24c9e9d2d2381&v=4" alt="Gabriel Henrichs"/>
                <div>
                    <strong>Gabriel Henrichs</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br/><br/>
                Eveniet harum nam cumque cupiditate totam laborum ratione perspiciatis, reiciendis, quos magni dolorum quibusdam, molestiae quaerat illum corporis ex unde! Magnam, odio!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;