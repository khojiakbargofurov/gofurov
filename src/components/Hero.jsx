
import { Link } from 'react-router-dom'
import AutoTypingText from './AutoTypingText'
import HeroImage from "/public/vctrly-startup-build-man.png"
import Thunder from "/public/thunder.png"
function Hero() {
  return (
    <div>
      <div className="hero bg-base-100 lg:py-20 my-6">
        <div className="hero-content flex-col lg:flex-row ">
          <div className='lg:pr-80 md:pr-64'>
            <h1 className="md:text-6xl sm:text-5xl text-3xl gap-2 "><AutoTypingText /></h1>
            <p className="py-6">
              Ingliz tili bilan kelajak hayotingizni hozirdan quring
            </p>
            <button className="btn btn-info"><Link className="flex" to="/quizes">
              <img className='w-4' src={Thunder} alt="thunder" /> Boshlash</Link></button>
          </div>
          <img
            src={HeroImage}
            className="max-w-sm  rounded-lg " />
        </div>
      </div>
    </div>
  )
}

export default Hero
