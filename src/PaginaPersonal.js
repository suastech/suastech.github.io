import './PaginaPersonal.css'
import { useState } from 'react';
import foto from './images/picture.jpg'
import bibliotopia from './images/bibliotopía.png'
import twitter from './images/twitter.png'
import email from './images/email.png'
import linkedin from './images/linkedin.png'
import ListOfArticles from './ListOfArticles'

function PaginaPersonal() {

    const [isBooks, setIsBooks] = useState(false);
    const [isArticles, setIsArticles] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
  
    function buttonBooks() {
      setIsBooks(prev => !prev);
    }
    
    function buttonArticles() {
      setIsArticles(prev => !prev);
    }
  
    function buttonProjects() {
      setIsProjects(prev => !prev);
    }
  
return (
    <>
    <header className='header'>
        <h1>Jesús Suaste Cherizola</h1>
    </header>
    <div className='body'>
        <div className='lateral'>
            <div className='information'>
                <img src={foto} alt="myprofile"/> 
                <p><a target="_blank" rel="noreferrer"href="link-para-CV-English" style={ {color: "blue"}}>CV English</a> <a target="_blank" rel="noreferrer"href="link-para-CV-Español" style={ {color: "blue"}}>CV Español</a></p>
                <p>Welcome to my page! I am a Mexican philosopher and sociologist. I write mainly about politics, social movements and economics. Here you can check also a sample of my own coding projects<br/><br/> If you want to collaborate or know more about my work, please do not hesitate to contact me.</p>
            </div>
            <div className='images'>
                    <a target="_blank" rel="noreferrer" href='https://www.bibliotopia.net'><img id='bibliotopía' src={bibliotopia} alt='Bibliotopía'/></a>
                    <a target="_blank" rel="noreferrer" href='https://twitter.com/suaste86'><img src={twitter} alt='Twitter' /></a>
                    <a target="_blank" rel="noreferrer" href='mailto:jsuaste86@gmail.com'><img src={email} alt='Email' /></a>
                    <a target="_blank" rel="noreferrer" href='http://www.linkedin.com/in/jesús-suaste-cherizola-5b784b1a2'><img src={linkedin} alt='LinkedIn' /></a>
            </div>

        </div>
        <div className='central'>
        <h1>Publications and projects</h1>
        <h2 onClick={buttonBooks} >
            <button className= {!isBooks?"central h2 button": "selected"}>&gt;</button>
            Books
        </h2>
            {isBooks? 
            <ul>
            <li>
              <a target="_blank" rel="noreferrer"href="enlace-a-libro-1">
                <i>El País del Dolor. Historia del Movimiento por la Paz con Justicia y Dignidad.</i> Ediciones Proceso. México: 2018.
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer"href="enlace-a-libro-2">
                <i>with Mark Young & Govert Schuler (eds). Democratizar el dinero. Una introducción a la Reforma del Dinero Soberano.</i> Alliance for Just Money. Bloomington-Normal. 2020.
              </a>
            </li>
            </ul>
                :
                null
            }
            <h2 onClick={buttonArticles} >
                <button className= {!isArticles?"central h2 button": "selected"}>&gt;</button>
                Articles and book chapters
            </h2>
                {isArticles? 
                <ListOfArticles/>
                    :
                    null
                }

            <h2 onClick={buttonProjects} >
            <button className= {!isProjects?"central h2 button": "selected"}>&gt;</button>
                Coding Projects
            </h2>
            {isProjects? 
                <ul>
                <li>Libro 1</li>
                <li>Libro 2</li>
                <li>Libro 3</li>
                </ul>
                    :
                    null
                }
            </div>
        </div>
    <footer>
      
    </footer>
    </>
    )
}

export default PaginaPersonal;