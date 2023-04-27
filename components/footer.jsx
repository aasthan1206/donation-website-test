import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    const iconStyle = "h-6 w-6 text-white hover:text-secondary"
    const socialIconsData = [
        {
            id: 1,
            title: 'Facebook',
            icon: <AiFillFacebook className={iconStyle} />,
        },
        {
            id: 2,
            title: 'Instagram',
            icon: <BsInstagram className={iconStyle} />,
        },
        {
            id: 3,
            title: 'Twitter',
            icon: <FaTwitterSquare className={iconStyle} />,
        },
        {
            id: 4,
            title: 'YouTube',
            icon: <BsYoutube className={iconStyle} />,
        },
    ]

    const footerData = [
        {
            id: 1,
            title: 'Donate',
        },
        {
            id: 2,
            title: 'About Us',
        },
        {
            id: 3,
            title: 'Contact Us',
        },
    ]
  return (
    <div className="bg-background">
        <div className="p-12 flex justify-around">
            <div>
                <div className="text-3xl font-bold text-white">Logo</div>
                <div className="flex py-8 gap-4">
                    {socialIconsData.map((item) => (
                        <div key={item.id} className="cursor-pointer">
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {footerData.map((item) => (
                    <div key={item.id} className="py-4 text-white hover:text-secondary text-lg font-medium cursor-pointer">
                        {item.title}
                    </div>
                ))}
            </div>
            <div>
                <div className="text-3xl text-white text-bold">Join our Newsletter</div>
                <div className="text-white py-4">Join our mailing list and get updates about our donation drives!</div>
                <div className="py-4">
                    <input type="text" placeholder="Enter your email" className="rounded-l-full py-2 px-4 outline-none" />
                    <button className="bg-secondary rounded-r-full py-2 px-4 text-white hover:bg-primary font-semibold">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
