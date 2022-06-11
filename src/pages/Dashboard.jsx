import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
  return (
    /* Margin from the Navbar */
    <div className='mt-12'>

        {/* nowrap means that flex items will overflow the container width if necessary (creates a scroll bar) */}
        <div className='flex flex-wrap lg:flex-nowrap justify-center'>

            {/* I don't want the bg-image to repeat to fill empty space (bg-no-repeat), the bg-image scales to fill the div (bg-cover) */}
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-4/5 w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                {/* Left portion of banner image */}
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='font-bold text-gray-400'>Earnings</p>
                        <p className='text-2xl'>$999,999.99</p>
                    </div>
                </div>

                {/* Banner image button */}
                <div className='mt-6'>
                    <Button color='white' bgColor='blue' text="Download" borderRadius="10px" size="md" />
                </div>
            </div>

            <div className='flex m-3 flex-wrap justify-center gap-1 items-center'></div>


        </div>
    </div>
  )
}

export default Dashboard