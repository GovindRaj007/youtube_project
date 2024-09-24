import React from 'react'

const Comment = ({ info }) => {
    const { authorDisplayName, authorProfileImageUrl, textDisplay } = info.snippet.topLevelComment.snippet;
    return (
        <div className='flex py-4'>
            <img className='w-[40px] h-[40px] rounded-full' src={authorProfileImageUrl} alt='author-profile' />
            <div className='ml-4'>
                <p className='pb-1 text-sm font-medium'>{authorDisplayName}</p>
                <div dangerouslySetInnerHTML={{ __html: textDisplay }} />
            </div>
        </div>
    )
}

export default Comment