import React from 'react'
import CountUp from 'react-countup'

const Statistics = () => {
    const statisticsData = [
        {
            id: 1,
            title: 'Volunteers',
            count: '500',
        },
        {
            id: 2,
            title: 'Organizations',
            count: '50',
        },
        {
            id: 3,
            title: 'Donors',
            count: '1000',
        },
    ]
  return (
    <div className='mx-8 my-12 py-4 bg-secondary'>
        <div className='flex justify-around'>
        {
            statisticsData.map((item) => (
                <div key={item.id} className='text-white font-main text-center'>
                    <CountUp end={item.count} className='text-5xl font-semibold'/>
                    <span className='text-3xl font-medium'>+</span>
                    <div className='text-xl font-medium pt-2'>{item.title}</div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Statistics
