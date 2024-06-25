import styles from './Footer.module.css';
import artVenueLogo from '../../assets/svg/artVenue.svg';
import kontrastrLogo from '../../assets/svg/kontrastr.svg';
import shellLogo from '../../assets/svg/shell.svg';
import smartFinderLogo from '../../assets/svg/smartFinder.svg';
import wavesMarathonLogo from '../../assets/svg/wavesMarathon.svg';
import zoomerrLogo from '../../assets/svg/zoomerr.svg';
import logo from '../../assets/svg/logo.svg';
import youtube from '../../assets/svg/youtube.svg';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg';
import instagram from '../../assets/svg/instagram.svg';
import linkedin from '../../assets/svg/linkedin.svg';

import apple from '../../assets/images/apple.png';
import googlePlay from '../../assets/images/google-play.png';

function Footer() {
  return (
    <footer>
      <section id='sponsors' className={styles.sponsors} aria-label='sponsors'>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <ul className={`${styles.list} ${styles.listTypeSponsors}`}>
              <li className={styles.listItemTypeSponsors}>
                <a href='#' className={styles.listLinkTypeSponsors}>
                  <img className={styles.logoImg} src={shellLogo} alt='SHELLS logo' />
                  <p className={`${styles.logoText} heading-4`}>SHELLS</p>
                </a>
              </li>
              <li className={styles.listItemTypeSponsors}>
                <a href='#' className={styles.listLinkTypeSponsors}>
                  <img className={styles.logoImg} src={smartFinderLogo} alt='SmartFinder logo' />
                  <p className={`${styles.logoText} heading-4`}>SmartFinder</p>
                </a>
              </li>
              <li className={styles.listItemTypeSponsors}>
                <a href='#' className={styles.listLinkTypeSponsors}>
                  <img className={styles.logoImg} src={zoomerrLogo} alt='Zoomerr logo' />
                  <p className={`${styles.logoText} heading-4`}>Zoomerr</p>
                </a>
              </li>
              <li className={styles.listItemTypeSponsors}>
                <a href='#' className={styles.listLinkTypeSponsors}>
                  <img className={styles.logoImg} src={artVenueLogo} alt='ArtVenue logo' />
                  <p className={`${styles.logoText} heading-4`}>ArtVenue</p>
                </a>
              </li>
              <li className={styles.listItemTypeSponsors}>
                <a href='#' className={styles.listLinkTypeSponsors}>
                  <img className={styles.logoImg} src={kontrastrLogo} alt='kontrastr logo' />
                  <p className={`${styles.logoText} heading-4`}>kontrastr</p>
                </a>
              </li>
              <li className={styles.listItemTypeSponsors}>
                <a href='#' className={styles.listLinkTypeSponsors}>
                  <img className={styles.logoImg} src={wavesMarathonLogo} alt='WAVESMARATHON logo' />
                  <p className={`${styles.logoText} heading-4 ${styles.logoTextTypeSmall}`}>
                    WAVES<span className={styles.fwRegular}>MARATHON</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.footerContainer}>
            <div className={styles.footerHeading}>
              <img className={styles.logo} src={logo} alt='logo' />
              <form
                className={styles.newsletter}
                onSubmit={(event) => {
                  event.preventDefault();
                }}>
                <input className={`${styles.input} body-m`} type='email' placeholder='Подписаться на рассылку' />
                <button className={`${styles.button} button-m`}>Подписаться</button>
              </form>
            </div>
            <div className={styles.footerBody}>
              <nav className={styles.footerNav}>
                <h3 className={`${styles.navCategory} heading-6`}>Для взрослых</h3>
                <ul className={`${styles.list} ${styles.navList}`}>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Кардиология
                    </a>
                  </li>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Терапия
                    </a>
                  </li>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Флебология
                    </a>
                  </li>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Травмы
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className={styles.footerNav}>
                <h3 className={`${styles.navCategory} heading-6`}>Для детей</h3>
                <ul className={`${styles.list} ${styles.navList}`}>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Педиатрия
                    </a>
                  </li>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Инфекции
                    </a>
                  </li>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Неврология
                    </a>
                  </li>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Фтизиатрия
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className={styles.footerNav}>
                <h3 className={`${styles.navCategory} heading-6`}>Новости</h3>
                <ul className={`${styles.list} ${styles.navList}`}>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Новости здравоохранения
                    </a>
                  </li>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Открытия
                    </a>
                  </li>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Документы
                    </a>
                  </li>
                  <li className='menu-tabs'>
                    <a className={styles.navLink} href='#'>
                      Справочники
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className={styles.social}>
                <div className={styles.contacts}>
                  <h3 className={`${styles.navCategory} heading-6`}>Контакты</h3>
                  <div className={styles.contactsApp}>
                    <a className={styles.appLink} href='#'>
                      <img src={apple} alt='apple' />
                    </a>
                    <a className={styles.appLink} href='#'>
                      <img src={googlePlay} alt='google play' />
                    </a>
                  </div>
                </div>
                <div className={styles.socialLinks}>
                  <h3 className={`${styles.navCategory} heading-6`}>Присоединиться к нам</h3>
                  <ul className={`${styles.list} ${styles.socialList}`}>
                    <li>
                      <a href='#'>
                        <img src={youtube} alt='youtube' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src={facebook} alt='facebook' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src={twitter} alt='twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src={instagram} alt='instagram' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src={linkedin} alt='linkedin' />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className={styles.footerBottom}>
              <p className={`${styles.copywriting} body-s`}>Тестовая компания @ 2023. Все права защищены.</p>
              <nav className={styles.footerBottomLinks}>
                <a className={`${styles.bottomLink} menu-tab`} href='#'>
                  Медицина
                </a>
                <a className={`${styles.bottomLink} menu-tab`} href='#'>
                  Наука
                </a>
                <a className={`${styles.bottomLink} menu-tab`} href='#'>
                  Инновации
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
