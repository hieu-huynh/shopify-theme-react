import React from 'react'

export default function ComfortCelecratedAndTrusted() {
  return (
    <section className="px-3 py-8 bg-gradient-to-b from-athens-gray to-[#F6F6F9] text-center">
      <h2 className="font-['Tiempos'] text-3xl lg:text-[39px] lg:w-2/5 lg:mx-auto">
        Comfort <span className="italic">celebrated & trusted </span>
        around the world
      </h2>
      <p className="font-['Inter'] text-neutral-800 lg:text-xl">
        Trust the experts
      </p>
      <p className="font-['Inter'] mt-10 mx-6 text-xl text-black-65 lg:text-2xl lg:w-2/5 lg:mx-auto">
        “The Emma Mattress is built for a medium-firm feel with foam layers that
        conform closely to alleviate aches and pains.”
      </p>
      <div className="w-3/4 flex flex-wrap justify-between mx-auto h-28 mt-5">
        <div className="w-1/4 flex justify-center lg:w-1/5">
          <img src="/assets/tuck-logo.svg" width={78} height={25} />
        </div>
        <div className="w-1/4 flex justify-center lg:w-1/5">
          <img src="assets/daily-beast-logo.svg" width={130} height={30} />
        </div>
        <div className="w-1/4 flex justify-center lg:w-1/5">
          <img src="/assets/daily-beast-logo.svg" width={144} height={17} />
        </div>
        <div className="w-1/2 flex justify-center lg:w-1/5">
          <img src="/assets/real-homes-logo.svg" width={65} height={29} />
        </div>
        <div className="w-1/2 flex justify-center lg:w-1/5">
          <img src="/assets/t3-logo.svg" width={47} height={29} />
        </div>
      </div>
    </section>
  );
}
