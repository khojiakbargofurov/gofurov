
import { Link } from 'react-router-dom'
import AutoTypingText from './AutoTypingText'
import HeroImage from "/public/vctrly-startup-build-man.png"
import Thunder from "/public/thunder.png"
function Hero() {
  return (
    <div>
      <div className="hero bg-base-100 lg:py-20 my-6">
        <div className="hero-content flex-col lg:flex-row ">
          <div>
            <h1 className="sm:text-6xl text-3xl font-bold"><AutoTypingText /></h1>
            <p className="py-6">
              Ingliz tili bilan kelajak hayotingizni hozirdan quring
            </p>
            <button className="btn btn-info"><Link className="flex" to="/quizes">
              <img className='w-4' src={Thunder} alt="thunder" /> Boshlash</Link></button>
          </div>
          <img
            src={HeroImage}
            className="lg:max-w-sm w-full rounded-lg " />
        </div>
      </div>
    </div>
  )
}

export default Hero
