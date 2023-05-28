import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return(
        <div className="text-white">
            <div className="max-w-[800px] h-[calc(100vh-96px)] mx-auto text-center flex flex-col justify-center">
                <p className="text-white font-bold p-2">GROWING WITH ONLINE WEB SHOPS</p>
                <h1 className="text-4xl md:text-5xl sm:text-5xl font-bold md:py-6">Grow with Online Visibility</h1>
                <div>
                    <TypeAnimation
                    sequence={[
                        // Same String at the start will only be typed once, initially
                        'We Develope Websites for Blogs',
                        1000,
                        'We Develope Websites for Ecommerece',
                        1000,
                        'We Develope Websites for Bookings',
                        1000,
                        'We Develope Websites for Hotels',
                        1000,                        
                        'We Develope Websites for Business',
                        1000,                        
                        'We Develope Websites for Landing Pages',
                        1000,
                    ]}
                    className="md:text-2xl sm:text-xl font-bold py-4"
                    wrapper="p"
                    cursor={true}
                    repeat={Infinity}
                    speed={50}
                    />
                </div>
                <p className="md:text-2xl mt-5 text-xl  text-white">Online shops increase your customers world wide otherwise stay happy with number of customers.</p>
                <button className='bg-white hover:scale-125 duration-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#262cbe]'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero