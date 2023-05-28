import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards(){
    return(
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[95%] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Single} alt="/"/>
                    <h2 className='text-2xl font-bold text-center py-8'>Silver Package</h2>
                    <p className='text-center text-4xl font-bold'>$200</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>5 Page Website</p>
                        <p className='py-2 border-b mx-8'>Single Page Application</p>
                        <p className='py-2 border-b mx-8'>Advance UI/UX</p>
                        <p className='py-2 border-b mx-8'>Optimized UI/UX</p>
                    </div>
                    <button className='bg-[#262cbe] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 md:my-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Gold Package</h2>
                    <p className='text-center text-4xl font-bold'>$400</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Everything in Silver</p>
                        <p className='py-2 border-b mx-8'>Complete Frontend</p>
                        <p className='py-2 border-b mx-8'>API Integration</p>
                        <p className='py-2 border-b mx-8'>Backend Support</p>
                    </div>
                    <button className='bg-[#262cbe] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Diamond Package</h2>
                    <p className='text-center text-4xl font-bold'>$800</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Everything in Gold</p>
                        <p className='py-2 border-b mx-8'>Fullstack Development</p>
                        <p className='py-2 border-b mx-8'>Complete Support</p>
                        <p className='py-2 border-b mx-8'>Deployment</p>
                    </div>
                    <button className='bg-[#262cbe] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards