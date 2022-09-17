import logo from '../assets/Roadrunner-Logo.svg'
import facebook from '../assets/facebook-logo.svg'
import twitter from '../assets/twitter-logo.svg'
import instagram from '../assets/instagram-logo.svg'

const Header = () => {
  return (
    <div className="flex flex-col-reverse place-items-center  lg:flex-row justify-between mt-16">
        <div className="mt-6 lg:mt-0">
            <div className="text-3xl">Roadrunner - <span className='text-3xl'>Direct to every direction</span></div>
            <div className="text-sm font-light mt-4">Smartest way to send and receive parcels, make money doing deliveries</div>
            <div className='mt-4 flex space-x-4'>
                <a href="https://facebook.com/roadrunnerafrica" target="_blank" rel="noreferrer">
                    <div className='linkGrad w-9 h-9 rounded-full bg-grey flex justify-center items-center'>
                        <img src={facebook} alt="link" width="26%"/>
                    </div>
                </a>
                <a href="https://twitter.com/road_runnerapp" target="_blank" rel="noreferrer">
                    <div className='linkGrad w-9 h-9 rounded-full bg-grey flex justify-center items-center'>
                        <img src={twitter} alt="link" width="45%"/>
                    </div>
                </a>
                <a href="https://instagram.com/roadrunner.app" target="_blank" rel="noreferrer">
                    <div className='linkGrad w-9 h-9 rounded-full bg-grey flex justify-center items-center'>
                        <img src={instagram} alt="link" width="40%"/>
                    </div>
                </a>
            </div>
        </div>
        <div className="w-28 h-28 lg:w-40 lg:h-40 rounded-full bg-blue text-dark flex justify-center items-center">
            <img src={logo} alt="Roadrunner-logo" width="70%"/>
        </div>
    </div>
  )
}

export default Header