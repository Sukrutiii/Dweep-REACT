import Man from '../assets/dweep io 1.svg'
import './header.css'

const Header = ()=> {
  return (
    <>
    <div className='banner'>
      <div className='section-left'>
        <p className='header'>An inspiring design delivered to your inbox every morning</p>
        <p class="description">Our team scouts the internet for the best designs, illustrations and art and delivers
                a truly inspiring one every day to your inbox</p>
        <p className='tag'>Show me how it looks</p>
        <input type="email" placeholder="Your e-mail address"></input>
        <button>Register Now</button>
        <div className='bottom-line'>Free - No Spam - No Data Sharing</div>
      </div>
      <div className='section-right'>
        <img src={Man}></img>
      </div>
    </div>
    </>
  )
}

export default Header
