import React from 'react'
import { achievement } from '../assets'
import {SlGraduation} from 'react-icons/sl'
import {FiVideo} from 'react-icons/fi'
import {SlPeople} from 'react-icons/sl'

const Achievement = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-center '>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Our <span className='text-[#20B486]'>Achievements</span></h1>
                <p className='text-lg text-gray-600'>"There are no accidents."-Master Oogway</p>
                
                <div className='grid grid-cols-2 py-16'>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                            <SlGraduation 
                                size={30}
                                style={{color:'#1A906B'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>0</h1>
                            <p className='text-[#6D737A]'>Instructor</p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#FFFAF5] rounded-xl'>
                            <FiVideo 
                                size={30}
                                style={{color:'#FFC27A'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>10+</h1>
                            <p className='text-[#6D737A]'>Papers</p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                            <SlGraduation 
                                size={30}
                                style={{color:'#ED4459'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>20,000+</h1>
                            <p className='text-[#6D737A]'>Student</p>
                        </div>

                    </div>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                            <SlPeople 
                                size={30}
                                style={{color:'#0075FD'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>10+</h1>
                            <p className='text-[#6D737A]'>Users</p>
                        </div>

                    </div>

                </div>
           </div>
            
             
             <img  src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26a9c8b3-5039-41d7-aebc-e5a818ce51b3/dejgb80-46e2a7a9-a130-4a2d-b741-2d2312e4d4db.jpg/v1/fill/w_835,h_560,q_75,strp/master_oogway__powers_and_abilities__by_tailung5000_dejgb80-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYwIiwicGF0aCI6IlwvZlwvMjZhOWM4YjMtNTAzOS00MWQ3LWFlYmMtZTVhODE4Y2U1MWIzXC9kZWpnYjgwLTQ2ZTJhN2E5LWExMzAtNGEyZC1iNzQxLTJkMjMxMmU0ZDRkYi5qcGciLCJ3aWR0aCI6Ijw9ODM1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8eF-uFP9vS7DUAxObbAz95UqhTx8HO4XHk3hPL40pWg'} className="m-auto md:order-last  order-first" />




        </div>
        

    </div>
  )
}

export default Achievement