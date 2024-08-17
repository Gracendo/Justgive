import React from 'react'

const Card = ({ cardtitle, cardtext }) => {
    return (
        <div className='border rounded-2xl bg-white p-8 shadow w-1/4'>
            <div className='h-16'>
                <h3 className='text-xl mb-4 font-semibold'>{cardtitle}</h3>
            </div>
            <p className=''>{cardtext}</p>
        </div>
    )
}

export default Card