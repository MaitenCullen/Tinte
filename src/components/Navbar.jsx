import React from 'react'
import { useTranslation } from 'react-i18next';
import { ImCross } from "react-icons/im";

export const NavBar = () => {
  const theme = ''
  const [t, i18n] = useTranslation("global");
  function toggleMenu() {
    let mobileMenu = document.querySelector('.divMobile');
    mobileMenu.classList.toggle('show');
  }
  function hideMenu() {
    let mobileMenu = document.querySelector('.divMobile');
    mobileMenu.classList.remove('show');
  }
  return (
    <div>
        <ul className='navBarUl' data-dropdown-menu id={theme}>
            <li id={theme}><a  href='#skills'>{t('navbar.SKILLS')}</a></li>
            <li><a  href='#projects'>{t('navbar.PROJECT')}</a></li>
            <li><a  href='#contact'>{t('navbar.CONTACT')}</a></li>
            <li><a  href='#servicios'>{t('navbar.SERVICIOS')}</a></li>
        </ul>
        <button className='navButton' onClick={()=> toggleMenu()}><p>Menu</p></button>
        <div className='divMobile'>
          <ul className='mobileNavbar'>
              <li id={theme} className='clean navLink'><a  href='#skills' onClick={hideMenu}>{t('navbar.SKILLS')}</a></li>
              <li className='clean navLink'><a  href='#projects' onClick={hideMenu}>{t('navbar.PROJECT')}</a></li>
              <li className='clean navLink'><a  href='#contact' onClick={hideMenu}>{t('navbar.CONTACT')}</a></li>
              <li className='clean navLink'><a  href='#servicios' onClick={hideMenu}>{t('navbar.SERVICIOS')}</a></li>
              <div className='div-icon-mobile'>
                 <i className="icon-nav md-25"  onClick={hideMenu}><ImCross/></i>
              </div>
            
          </ul>
        </div>
    </div>
  )
}
