import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Manager = () => {
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className="conatiner mx-auto py-10 flex flex-col gap-5 max-w-6xl">
                <h1 className='flex justify-center text-4xl font-bold'>
                    <span className='text-white'>Pass</span>
                    <span className='text-purple-500'>Man</span>
                </h1>
                <p className='flex justify-center text-purple-400'>Your own Password Manager</p>

                <div className="text-white flex flex-col items-center gap-10 p-4">
                    <input placeholder='Enter website URL' className='p-2 w-full border border-purple-400 rounded-md' type="text" name="" id="" />

                    <div className="flex w-full justify-between gap-5">
                        <input placeholder='Enter username or email' className='p-2 border border-purple-400 w-1/2 rounded-md' type="text" name="" id="" />
                        <div className="relative w-1/2">
                            <input placeholder='Enter Password' className='p-2 border border-purple-400 w-full rounded-md' type="text" name="" id="" />
                            <span className='absolute right-2 top-1'>
                                <img src="public\icons8-eye-30.png" alt="" />
                            </span>
                        </div>
                    </div>
                    
                    <button className='flex justify-center items-center font-bold text-xl bg-purple-400 w-1/2 rounded-md hover:text-purple-500 cursor-pointer'>
                        <DotLottieReact
                            src="https://lottie.host/20d051ef-b62f-4f76-aeca-29aabd812ab9/rnv66PY7C4.lottie"
                            loop
                            autoplay
                            className='w-20'
                        />
                        Add Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Manager