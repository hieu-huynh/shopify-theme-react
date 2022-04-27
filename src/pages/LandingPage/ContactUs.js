import React  from 'react';


export default function ContactUs() {
  return (
    <section className='p-3 lg:px-14 pb-14'>
      <div className='bg-gradient-to-b from-athens-gray to-[#F6F6F9] rounded-[20px] py-10 px-7'>
        <h2 className="font-['Tiempos'] text-3xl text-center lg:text-[39px]">
          We got your <span className='italic font-thin'>back.</span>
        </h2>
        <p className="font-['Inter'] text-neutral-800 text-center lg:text-xl lg:mt-3">
          Shop with our sleep experts today!
        </p>
        <div className='flex flex-col mt-2 lg:flex-row'>
          <div className='flex mt-5 w-full lg:flex-wrap justify-center'>
            <div className='mr-4 lg:mr-0 w-1/4 lg:w-fit'>
              <img src={'/assets/chat-with-us.svg'} height={60} width={60} />
            </div>
            <div className='w-3/4 lg:w-full lg:text-center lg:mt-5'>
              <h3 className='text-xl lg:text-2xl'>Chat With Us</h3>
              <p className='text-comet lg:w-2/3 lg:mx-auto lg:mt-3'>
                Ask away—we're here to answer all things sleep.
              </p>
            </div>
          </div>
          <div className='flex mt-5 w-full lg:flex-wrap justify-center'>
            <div className='mr-4 lg:mr-0 w-1/4 lg:w-fit'>
              <img src={'/assets/call-us.svg'} height={60} width={60} />
            </div>
            <div className='w-3/4 lg:w-full lg:text-center lg:mt-5'>
              <h3 className='text-xl lg:text-2xl'>Call us</h3>
              <p className='text-comet lg:w-2/3 lg:mx-auto lg:mt-3'>
                We'd love to hear from you. Call 1 (855) 580 EMMA or
                <span className='underline'> schedule a call</span> with us.
              </p>
            </div>
          </div>
          <div className='flex mt-5 w-full lg:flex-wrap justify-center'>
            <div className='mr-4 lg:mr-0 w-1/4 lg:w-fit'>
              <img src={'/assets/email-us.svg'} height={60} width={60} />
            </div>
            <div className='w-3/4 lg:w-full lg:text-center lg:mt-5'>
              <h3 className='text-xl lg:text-2xl'>Email us</h3>
              <p className='text-comet lg:w-2/3 lg:mx-auto lg:mt-3'>
                Drop us an <span className='underline'>email</span> and we'll
                respond in 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
