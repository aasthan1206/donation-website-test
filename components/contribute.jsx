import React from 'react'
import { MdOutlineVolunteerActivism } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'
import { GrOrganization } from 'react-icons/gr'
import { VscOrganization } from 'react-icons/vsc'
import { motion } from 'framer-motion'

const Contribute = () => {
    const iconStyling = 'h-6 w-6'
    const contributionData = [
        {
            id: 1,
            title: 'Send your donation',
            icon: <MdOutlineVolunteerActivism className='h-12 w-12 text-white bg-secondary rounded-lg' />,
        },
        {
            id: 2,
            title: 'Become a volunteer',
            icon: <FaRegHandshake className='h-12 w-12 text-white bg-secondary rounded-lg' />,
        },
        {
            id: 3,
            title: 'Register your organization',
            icon: <VscOrganization className='h-12 w-12 text-white bg-secondary rounded-lg' />,
        },
    ] 
  return (
    <div className='bg-white px-12 py-6'>
      <div className='flex gap-12'>
        <div className='text-black text-2xl font-main font-semibold self-center'>How you can contribute?</div>
        <div className='flex justify-items-center'>
        {contributionData.map((item) => (
            <div key={item.id} className='px-12'>
                <motion.div whileHover={{scale: 1.25}} transition={{ease: 'easeOut'}} className='w-16 mx-auto cursor-pointer'>{item.icon}</motion.div>
                <div className='text-primary text-lg font-semibold py-2'>{item.title}</div>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Contribute
