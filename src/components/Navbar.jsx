import {useState} from 'react'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'


function Navbar(){

    const [nav , setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        console.log(!nav)
    }

    // !nav (nav is a variable and it will toggle nav value)

    return(
        <div className="px-4 md:px-8 flex justify-between items-center mx-auto h-24 text-[#262cbe] bg-white">
            <h1 className="w-full text-3xl font-bold">LandingPage.</h1>
            <ul  className="hidden md:flex">
                <li className="duration-300 p-4 font-medium cursor-pointer hover:bg-[#262cbe] hover:text-white">Home</li>
                <li className="duration-300 p-4 font-medium cursor-pointer hover:bg-[#262cbe] hover:text-white">Company</li>
                <li className="duration-300 p-4 font-medium cursor-pointer hover:bg-[#262cbe] hover:text-white">Resources</li>
                <li className="duration-300 p-4 font-medium cursor-pointer hover:bg-[#262cbe] hover:text-white">About</li>
                <li className="duration-300 p-4 font-medium cursor-pointer hover:bg-[#262cbe] hover:text-white">Contact</li>
            </ul>

            {/* Mobile Navigation */}
            <div onClick={handleNav} className='cursor-pointer hover:scale-150 duration-500 block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'text-white z-50 fixed left-0 top-0 w-[80%] border-r border-r-white-900 bg-[#262cbe] h-full ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold mt-[30px] ml-5">LandingPage.</h1>
                <ul className='p-4 mt-4 uppercase'>
                    <li className="duration-300 py-4 cursor-pointer hover:bg-white hover:text-[#262cbe] hover:px-4 border-b  border-r-white-900">Home</li>
                    <li className="duration-300 py-4 cursor-pointer hover:bg-white hover:text-[#262cbe] hover:px-4 border-b border-r-white-900">Company</li>
                    <li className="duration-300 py-4 cursor-pointer hover:bg-white hover:text-[#262cbe] hover:px-4  border-b border-r-white-900">Resources</li>
                    <li className="duration-300 py-4 cursor-pointer hover:bg-white hover:text-[#262cbe] hover:px-4  border-b border-r-white-900">About</li>
                    <li className="duration-300 py-4 cursor-pointer hover:bg-white hover:text-[#262cbe] hover:px-4  border-b border-r-white-900">Contact</li>
                </ul>
            </div>
        </div>

        // 
    )
}
// style={{background:"red"}}
export default Navbar