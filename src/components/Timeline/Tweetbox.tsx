import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon
} from '@heroicons/react/outline'
import { useState } from 'react'

const Tweetbox = () => {
    const [ input, setInput] = useState<string>('');
  return (
    <div className='flex space-x-2 p-5'>
        <img
            className='mt-4 h-12 w-12 rounded-full object-cover'
            src='https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png'
        />
        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='outline-none h-24 w-full text-lg'
                    type="text"
                    placeholder="What's poppin?"
                />
                <div className='flex items-center'>
                    <div className='flex flex-1 space-x-2 text-twitter'>
                        <PhotographIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <SearchCircleIcon className='h-5 w-5 cursor-pointer'/>
                        <EmojiHappyIcon className='h-5 w-5 cursor-pointer'/>
                        <CalendarIcon className='h-5 w-5 cursor-pointer'/>
                        <LocationMarkerIcon className='h-5 w-5 cursor-pointer'/>
                    </div>
                    <button disabled={!input} className='bg-twitter text-white px-5 py-2 rounded-full font-bold disabled:opacity-50'>Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Tweetbox