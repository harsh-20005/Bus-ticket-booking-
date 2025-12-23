import React, { useState } from 'react'

const Destination = () => {

    const[from, setFrom] =useState('');
    const[to, setTo] =useState('');
    // const[distance, setDistance] =useState('');

    const handleFromChange = (e) => {
        setFrom(e.target.value);
    }

     const handleToChange = (e) => {
        setTo(e.target.value);
    }
    
    const isDestinationSelected = from && to;


  return (
    <div className='w-full space-y-4'>
      {
        !isDestinationSelected
        ?
        (
            <div className='w-full grid grid-cols-2 gap-10'>
                <div className=''>
                      <label htmlFor='from' className='block mb-2 font-semibold'> 
                        From
                    </label>
                    <select
                     name="from" 
                     value={from} 
                     onChange={handleFromChange}
                     id="from" 
                     className='w-full appearance-none text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'>
                        <option value="">Select Locaation</option>
                        <option value="location1">Locaation 1</option>
                        <option value="location2">Locaation 2</option>
                        <option value="location3">Locaation 3</option>
                    </select>
                </div>

                <div className=''>
                    <label htmlFor='to' className='block mb-2 font-semibold'> 
                        To
                    </label>
                    <select
                     name="to" 
                     value={to} 
                     onChange={handleToChange}
                     id="to" 
                     className='w-full appearance-none text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'>
                        <option value="">Select Locaation</option>
                        <option value="location4">Locaation 4</option>
                        <option value="location5">Locaation 5</option>
                        <option value="location6">Locaation 6</option>
                    </select>
                </div>
            </div>
        )
        :
        (
            <div className='space-y-5'>
                <h1 className='text-xl text-neutral-800 dark:text-neutral-100 font-medium'>
                    Your Destination Selected
              </h1>
                <div className="w-full flex items-center gap-x-3">
                    <div className="w-fit text-base font-semibold">
                        Form:- <span className="ml-1.5 font-medium">{from}</span>
                    </div>
                    <div className='flex-1'>
                        <div className="w-full h-[1px] border border-dashed border-neutral-200 dark:border-neutral-800/80"></div>
                    </div>
                            <div className="w-fit text-base font-semibold">
                                To:- <span className="ml-1.5 font-medium">{to}</span>
                            </div>
                </div>
            </div>
        )

      }
    </div>
  )
}

export default Destination
