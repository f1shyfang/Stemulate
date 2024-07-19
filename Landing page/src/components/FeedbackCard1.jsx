import React from 'react'
import { avatar, quotationMark } from '../assets'

const FeedbackCard1 = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
                <img src={avatar} />
                <div>
                    <h1>James </h1>
                    <p>Professional  MMA fighter</p>
                </div>
            
            </div>
            <img className='h-8' src={quotationMark} />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>"Year 12 was a pressure cooker, especially with all the advanced math.  Calculus had me lost at sea. Stimulate HSC became my lifeline. The platform broke down complex formulas into clear, step-by-step explanations. The interactive practice problems were a game-changer, allowing me to test my understanding in real-time. Stimulate HSC not only helped me master calculus, but it also built my confidence in math overall. Thanks to this amazing tool, I went from failing tests to feeling prepared for the HSC!"</h3>
      </div>
    </div>
  )
}

export default FeedbackCard1