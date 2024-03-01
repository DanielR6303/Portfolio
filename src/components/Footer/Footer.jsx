import React from 'react'
import './footer.css'

const Footer = () => {

    const year = new Date();
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Daniel</h1>

            <ul className="footer__list">
                <li className='footer__item'>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li className='footer__item'>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li className='footer__item'>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://github.com/DanielR6303" className="footer__social-icon" target="_blank">
        <i class="bx bxl-github"></i>
        </a>
        
        <a href="https://www.instagram.com/ft.lyra_?igsh=MTJwMDJibmNrMXU0eA==" className="footer__social-icon" target="_blank"><i class="bx bxl-instagram"></i></a>

        <a href="https://www.linkedin.com/in/daniel-rajadurai-5892b02a3/" className="footer__social-icon" target="_blank">
        <i class="bx bxl-linkedin"></i>
        </a>
            </div>

            <span className="footer__copy"> &copy; Daniel {year.getFullYear()} - All rights reserved. </span>
        </div>
    </footer>
  )
}

export default Footer