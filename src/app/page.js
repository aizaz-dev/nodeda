import Footer from '@/app/_components/Footer/Footer'
import Header from '@/app/_components/Header/Header'
import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div>
            <Header />
            <div>
                <div className=' flex justify-center leading-[60px]  max-md:mt-[15px]'>
                    <div>
                        <h1 className=' text-center font-extrabold'>
                            One ID&#44; All of
                        </h1>
                        <div className=' w-[200px]'>
                            <img src='/NodeDa.png' alt='' className='overflow-hidden ' />
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center mt-[60px] max-md:mt-[50px] cursor-pointer'>
                    <Link href="/signin" className='px-8 py-2 text-center bg-[#0076BA] hover:bg-[#3d97cb] rounded-full text-white text-[18px] max-md:py-3 max-md:px-9 max-md:shadow-md '>Sign in</Link>
                </div>
                <div className=' flex justify-center max-md:flex-col max-md:items-center max-md:gap-[50px] gap-[200px] my-[130px] max-md:my-[50px]'>
                    <div className=' '>
                        <img src='/image1.PNg' alt='' className='overflow-hidden w-[100px]  ' />
                        <h1 className=' pt-[10px] text-center font-extrabold'>
                            Cook Book
                        </h1>

                    </div>
                    <div>
                        <img src='/image3.PNg' alt='' className='overflow-hidden w-[100px] ' />
                        <h1 className=' pt-[10px] text-center font-extrabold'>
                            Tasks
                        </h1>
                    </div>
                    <div>
                        <img src='/image2.PNg' alt='' className='overflow-hidden  w-[100px]' />
                        <h1 className='  pt-[10px] text-center font-extrabold'>
                            Money
                        </h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page