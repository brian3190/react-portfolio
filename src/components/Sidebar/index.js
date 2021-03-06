import './index.scss'
import { Link, NavLink } from 'react-router-dom'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


const Sidebar =()=>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            {/* <img src={LogoS} />
            <img className='sub-logo' src={LogoSubtitle} alt="b" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/react-portfolio">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/brian-yap-159b99117/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://github.com/brian3190/'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://youtube.com/brian3190/'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://twitter.com/'>
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar