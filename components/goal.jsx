import React from 'react'
import Lottie from 'react-lottie'
import animationData from "../public/animations/45074-community.json";

const Goal = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
    }
  return (
    <div className='px-12'>
        <div className='md:flex gap-8'>
            <div>
                <div className='text-primary text-5xl text-center font-bold py-4'>Our Goal</div>
                <div className='text-lg py-2 pr-8 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ex repellendus, exercitationem repellat, deleniti iusto odit sapiente dolorem possimus nesciunt tempore officiis rem ipsa. Eos officiis quia ex asperiores nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae porro, eligendi ab doloribus ducimus esse deserunt? Mollitia quae, non harum ipsam eos sunt, impedit aliquam provident autem ab rerum.</div>
            </div>
            <div>
            <Lottie options={defaultOptions} height={300} width={300} />
            </div>
        </div>    
    </div>
  )
}

export default Goal
