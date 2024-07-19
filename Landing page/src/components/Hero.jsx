import React from 'react';
import { heroImg } from '../assets';
import  {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'>Stemulate HSC</p>
                <h1 className='md:leading-[72px] py-2 md:text-5xl text-4xl font-semibold'>Access To <span className='text-[#20B486]'>5000+</span> questions
                    from <span  className='text-[#20B486]'>1000+</span> Past Papers
                </h1>
                <p className='py-2 text-lg text-gray-600'>Past Papers made easy.</p>
                
                <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='What do want to learn?    '
                    />
                    <button>
                        <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#000'}}

                        />

                    </button>
                </form>
            </div>
            
            <img  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85jMSBIuC04JCN0fFCAvl2-z1bvkfgPfaHYLwwI5Rqg&s'} className="md:order-last  order-first" 
            
            width="1000" 
            height="200"
            
            />



        </div>
        

    </div>
  )
}

export default Hero