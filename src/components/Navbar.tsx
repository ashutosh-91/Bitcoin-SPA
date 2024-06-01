import navLogo from '../assests/tradex_logo.png'
function Navbar() {
  return (
    <div className='bg-[cyan]'>
        {/* Left section of nav */}
        <div>
            <img src={navLogo} alt="TradeX"/>
        </div>
        {/* Right section of nav */}
        <div>
            <a href="http://"></a>
        </div>
    </div>
  )
}

export default Navbar