import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <div>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="button-hmenu"
            data-testid="hamburgerIconButton"
            // onClick={onClickIcon}
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
      >
        {close => (
          <>
            <ul className="popup-container">
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose />
              </button>
              <li className="home-route">
                <AiFillHome className="icon" />
                <Link to="/" className="link">
                  HOME
                </Link>
              </li>
              <li className="about-route">
                <BsInfoCircleFill className="icon" />
                <Link to="/about" className="link">
                  ABOUT
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
