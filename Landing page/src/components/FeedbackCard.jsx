import React from 'react'
import { avatar, quotationMark } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
                <img src={avatar} />
                <div>
                    <h1>Jehan </h1>
                    <p>Professional  instigator </p>
                </div>
            
            </div>
            <img className='h-8' src={quotationMark} />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>"Balancing school activities, part-time work, and social life  made finding study time a struggle. Stimulate HSC was my solution! The platform's personalized study plans maximized my limited focus hours. The bite-sized lessons were perfect for squeezing in a quick study session between commitments.  I could access Stimulate HSC  anytime, anywhere, making it the ultimate study companion on the go. Thanks to Stimulate HSC, I aced my HSC exams while still maintaining a healthy balance in my life!" </h3>
      </div>
    </div>
  )
}

export default FeedbackCard