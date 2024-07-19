import React from 'react'
import { avatar, quotationMark } from '../assets'

const FeedbackCard2 = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
                <img src={avatar} />
                <div>
                    <h1>Dodo </h1>
                    <p>Modern Sufferer </p>
                </div>
            
            </div>
            <img className='h-8' src={quotationMark} />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>"I used to dread history class – all those dates and names blurring together. Stimulate HSC made a world of difference! It turned passive learning into active engagement. The interactive timelines and historical simulations brought the past to life.  Studying wasn't just memorizing facts, it was like stepping back in time!  My history grades skyrocketed, and I actually found myself enjoying the subject. Stimulate HSC made HSC history a breeze!.</h3>
      </div>
    </div>
  )
}

export default FeedbackCard2