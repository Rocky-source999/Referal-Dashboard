import React from 'react'

const AboutUs = () => {
  return (
    <div className='h-screen bg-gray-400 p-4 flex justify-center text-center'>
      <div className='max-w-[600px] mt-8'>
        <h1 className='text-4xl font-bold mb-4 underline decoration-red-500'>About Us</h1>
      <p className='mb-4'>Welcome to our Referral Dashboard — a smart platform designed to simplify and streamline referral tracking and management.</p>
      <p className='mb-4'>Our goal is to provide users with a clear and efficient way to monitor referrals, 
        analyze performance, and maximize growth opportunities. Whether you’re tracking user 
        referrals, monitoring profits, or managing campaigns, our dashboard offers all the tools 
        you need in one place.</p>
        <p className='mb-4 font-bold text-lg'>We focus on delivering:</p>
        <ul className='mb-4'>
            <li><span className='font-bold'>Real-time insights</span> into referral activity</li>
            <li><span className='font-bold'>User-friendly interface</span> for easy navigation</li>
            <li><span className='font-bold'>Accurate data tracking</span> to support better decisions</li>
            <li><span className='font-bold'>Performance analytics</span> to help you grow your network</li>
        </ul>
        <p>Our platform is built with modern technologies to ensure speed, reliability, 
            and responsiveness across all devices. We continuously improve our features to meet 
            user needs and provide a seamless experience.</p>
        </div>
    </div>
  )
}

export default AboutUs
