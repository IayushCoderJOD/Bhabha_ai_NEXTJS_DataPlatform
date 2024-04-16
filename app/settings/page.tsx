
import React from 'react'

const Settings = () => {
  return (
    <div className='absolute right-[25%] w-[400px] md:w-[600px] p-3 top-16 border border-gray-200 shadow-lg mr-5 '>
        <div className='p-5'>
        <div className='mt-3 '>
            <div className=' cursor-pointer font-bold text-3xl underline'>Profile</div>
            <div className=' text-xl mt-6 font-medium'>
                Personal Info
            </div>
            <div className='text-lg pl-4 p-2'>
                <label className='text-base text-gray-600 font-semibold'>Name</label>
                <br />
                <input className='mt-2 p-2 border border-gray-200 w-60 md:w-96 ' type="text" value={"Satpal.Code"} />
                {/* <button className='p-2 font-serif text-blue-500 text-xl'>edit</button> */}
            </div>
            <div className='text-lg pl-4 p-2'>
                <label className='text-base text-gray-600 font-semibold'>Email</label>
                <br />
                <input className='mt-2 p-2 border border-gray-200 w-60 md:w-96 ' type="text" value={"satpal@gmail.ai"} />
            </div>
            <div className='text-lg pl-4 p-2'>
    <label className='text-base text-gray-600 font-semibold'>Connected Accounts</label>
    <br />
    <div className='relative mt-2'>
    <img 
        className='absolute top-0 left-0 h-full w-14 pl-2'
        src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' 
        alt='acc' 
    />
    <input 
        className='pl-10 text-xl p-2 border border-gray-200 w-60 md:w-96'
        type="text" 
        value="  Google" 
    />
</div>
</div>
        </div>
        </div>
    </div>
  )
}

export default Settings