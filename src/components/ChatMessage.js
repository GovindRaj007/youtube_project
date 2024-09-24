import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

const ChatMessage = ({ name, message }) => {
    return (

        <div className='flex items-center shadow-sm p-2'>
            <FaUserAlt
                size={24}
                className="border-2 border-black rounded-full p-1 mr-2"
            />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>


    )
}

export default ChatMessage