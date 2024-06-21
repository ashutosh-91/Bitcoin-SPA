import { Link } from 'react-router-dom'
import navLogo from '../assests/tradex_logo.png'
function Navbar() {
  return (
    <div className='bg-[#f5f5f5] flex justify-between '>
        {/* Left section of nav */}
        <div className='w-12 p-2 md:ml-8 '>
            <img src={navLogo} alt="TradeX"/>
        </div>
        {/* Right section of nav */}
        <div className='md:space-x-4 md:mr-8 p-4 '>
          <Link to="/cryptoTaxes">Crypto Taxes</Link>
          <Link to="/FreeTools">Free Tools</Link>
          <Link to="/ResourceCenter">Resource Center</Link>
          <Link to="">
          <button className='bg-blue-800 text-white border-1 rounded-md p-1'>Get Started</button>
          </Link>

        </div>
    </div>
  )
}

export default Navbar