import React from 'react'

const Manager = () => {
    return (
    <>
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <div className="conatiner mx-auto max-w-6xl">
            <div className="text-white flex flex-col gap-10 p-4 bg-zinc-500">
                <input className='bg-white border-none rounded-md' type="text" name="" id="" />
                <div className="flex justify-between gap-5">
                    <input className='bg-white w-1/2 border-none rounded-md' type="text" name="" id="" />
                    <input className='bg-white w-1/2 border-none rounded-md' type="text" name="" id="" />
                </div>
            </div>
        </div>
    </>
    )
}

export default Manager