import React from 'react'

const CallToAction = () => {
    return (
        <div className='w-full pb-[3rem] min-h-[720px] flex flex-col justify-center items-center'>
            <div className="text-center flex-col w-full">
                <h1 className='text-[3rem] text-center font-bold'>Our Opportunities</h1>
                <h3 className='font-semibold text-[1.25rem] text-gray-500 mb-[1.5rem]'>Make changing the world your day job</h3>
            </div>
            <div className='w-full'>
                <div className='w-full shadow '>
                    <div>
                        <img src={require('../../assets/images/poor_black_children_smiling.png')} alt="pbcs" />
                    </div>
                    <div>
                        <div>
                            <h3>Work With Us</h3>
                            <h4>Does this sound like your dream job? For us it is. Join our team and bring your passion to work every day.</h4>
                        </div>
                        <div>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction