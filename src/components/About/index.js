import './index.css'
import Header from '../Header'

const About = () => (
  <div className="home-page-container">
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="home-img"
      />
    </div>
  </div>
)

export default About
