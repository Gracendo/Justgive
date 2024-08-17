import React from 'react'
import Card from './card/Card'

export default function Value() {
  return (
    <div className='flex justify-center items-center flex-col  w-full'>
      <div>
        <h1 className='text-[3rem] text-center font-bold '>Our Values</h1>
        <h3 className='font-semibold text-[1.25rem] text-gray-500 mb-5'>A few important things we live by</h3>
      </div>

      <div className='flex gap-10 w-full justify-center '>
        <Card cardtitle={"Open and Honest"} cardtext={"We want you to know how your donation is used and the impact you’re having around the world."} />
        <Card cardtitle={"Every shared meal counts"} cardtext={"Give what you can — whether it’s one meal or one year of meals — and know that it makes a difference."} />
        <Card cardtitle={"We’re in it together"} cardtext={"We want fighting hunger to be inclusive so that anyone, anywhere, can share the meal."} />
      </div>
    </div>
  )
}
