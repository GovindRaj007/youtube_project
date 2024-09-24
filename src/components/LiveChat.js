import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessages, generateRandomNames } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();
    const messages = useSelector(store => store.chat.message);
    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomNames(),
                message: generateRandomMessages(20),
            }))
        }, 1500);

        return () => clearInterval(i);
    }, [])
    return (
        <>
            <div className='w-[380px] h-[479px] p-4 border border-black rounded-b-none bg-slate-100 rounded-xl overflow-y-scroll flex flex-col-reverse'>
                {
                    messages?.map(m => <ChatMessage name={m.name} message={m.message} />
                    )
                }
            </div>
            <form className='flex justify-between border rounded-b-xl border-black p-2 w-[380px]'
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({
                        name: "Govind",
                        message: liveMessage,
                    }));
                    setLiveMessage("");
                }}
            >
                <input className='p-3 w-full border border-slate-400 rounded-l-full outline-none ' type='text' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='p-3 border border-slate-400  rounded-r-full'>Send</button>
            </form>
        </>
    )
}

export default LiveChat