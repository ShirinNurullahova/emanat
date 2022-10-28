import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../../assets/img/logo.svg'
import SearchIcon from '../../../assets/img/search.svg'

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-container-logo">
          <Link to='/'>
          <img src={Logo} alt="emanat-logo" />

          </Link>
        </div>

        <div className="header-container-search">
          <label>
            <input type="text" />

            <img src={SearchIcon} alt="emanat-axtaris" />
          </label>
        </div>

        <nav className='header-container-navbar'>
          <ul>
          <li><Link to='/about'>Haqqımızda</Link></li>
          <li><Link>Terminal xəritəsi</Link></li>
          <li><Link>Əməkdaşlıq</Link></li>
          <li><Link to='/career'>Karyera</Link></li>
          {/* <li><Link>eManatla öyrən</Link></li> */}
          {/* <li><Link to='/service'>Digər</Link></li> */}
          <li><Link>AZ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header