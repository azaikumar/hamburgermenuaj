import {Component} from 'react'
import Header from '../Header'
// import 'reactjs-popup/dist/index.css'

import './index.css'

class Home extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       isMenuOpen: false,
  //     }
  //   }

  //   toggleMenu = () => {
  //     this.setState(prevState => ({
  //       isMenuOpen: !prevState.isMenuOpen,
  //     }))
  //   }

  render() {
    return (
      <div className="home-page-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="home-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
            alt="home"
            className="home-img"
          />
        </div>
      </div>
    )
  }
}

export default Home
