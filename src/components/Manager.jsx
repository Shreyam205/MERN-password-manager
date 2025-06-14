import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useRef, useState, useEffect } from 'react';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({
        site: "",
        username: "",
        password: "",
    })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText= (text) =>{
        navigator.clipboard.writeText(text)
        alert("you copied " + text)
    }

    const showPassword = () => {
        // alert("showing the password")
        passwordRef.current.type = "text"
        if (ref.current.src.includes("public/icons8-closed-eye-30.png")) {
            ref.current.src = "public/icons8-eye-30.png"
            passwordRef.current.type = "password"
        } else {
            ref.current.src = "public/icons8-closed-eye-30.png"
            passwordRef.current.type = "text"
        }
    }

    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

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
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='p-2 w-full border border-purple-400 rounded-md' type="text" name="site" id="" />

                    <div className="flex w-full justify-between gap-5">
                        <input value={form.username} onChange={handleChange} placeholder='Enter username or email' className='p-2 border border-purple-400 w-1/2 rounded-md' type="text" name="username" id="" />
                        <div className="relative w-1/2">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='p-2 border border-purple-400 w-full rounded-md' type="password" name="password" id="" />
                            <span className='absolute right-2 top-2.5 cursor-pointer' onClick={showPassword}>
                                <img ref={ref} width={20} src="public/icons8-eye-30.png" alt="" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center font-bold text-xl bg-purple-400 w-1/2 rounded-md hover:text-zinc-800 cursor-pointer'>
                        <DotLottieReact
                            src="https://lottie.host/20d051ef-b62f-4f76-aeca-29aabd812ab9/rnv66PY7C4.lottie"
                            loop
                            autoplay
                            className='w-20'
                        />
                        Add Password
                    </button>
                </div>

                <div className="passwords text-white w-full flex flex-col justify-center items-center my-10">
                    <h2 className='text-purple-400 font-bold text-2xl py-5'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table class="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-purple-700'>
                                <tr>
                                    <th className='py-2'>Site URL</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                </tr>
                            </thead>
                            <tbody className=' bg-zinc-900'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index} className='text-center'>
                                        <td className='py-2'>
                                            <div className='flex items-center justify-center' onClick={()=>{copyText(item.site)}}>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='cursor-pointer'>
                                                    <img className='w-6' src="public/icons8-copy-64.png" alt="copy_site" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2'>
                                            <div className='flex items-center justify-center' onClick={()=>{copyText(item.username)}}>
                                                <span>{item.username}</span>
                                                <div className='cursor-pointer'>
                                                    <img className='w-6' src="public/icons8-copy-64.png" alt="copy_site" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2'>
                                            <div className='flex items-center justify-center' onClick={()=>{copyText(item.password)}}>
                                                <span>{item.password}</span>
                                                <div className='cursor-pointer'>
                                                    <img className='w-6' src="public/icons8-copy-64.png" alt="copy_site" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manager