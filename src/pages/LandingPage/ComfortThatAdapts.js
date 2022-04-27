import React  from 'react';

export default class ComfortThatAdapts extends React.Component {
  render() {
    return (
      <section className="px-3 pb-8 pt-6 lg:pt-10 lg:pb-14">
        <h2 className="text-center font-['Tiempos'] text-3xl lg:text-[39px]">
          Comfort that <span className="italic font-thin">adapts</span>
        </h2>
        <h3 className="w-full lg:w-3/5 text-center mx-auto text-comet px-2 lg:px-0">
          Let your mattress adapt to you—not the other way around. Our
          mattresses feature ComfortAdapt™: expertly designed to conform to you.
        </h3>
        <div className="w-full lg:w-5/6 flex justify-evenly align-middle mt-8 lg:mx-auto">
          <div className="card max-w-md w-1/2 font-['Inter'] rounded-lg text-center shadow-[0_4px_10px_rgba(0,0,0,0.1)] mr-3 lg:mr-0">
            <div className="gradient-background rounded-t-lg p-3">
              <img src="./assets/comfort-adapt-hybrid.svg" />
              <h3 className="hidden lg:inline-block text-sm font-semibold">
                OPTIMAL PRESSURE-RELIEF
              </h3>
            </div>
            <div className="w-full lg:mx-auto flex-grow px-3">
              <div className="flex items-center justify-center h-12">
                <h2 className="font-['Tiempos'] text-base lg:text-3xl">
                  ComfortAdapt™ Hybrid
                </h2>
              </div>
              <p className="text-sm lg:text-xl">
                Perfect balance of pressure-relief and support.
              </p>
            </div>
            <div className="p-3 lg:pb-8">
              <a className="lg:uppercase text-[13px] lg:text-base btn bg-pizazz text-[white] px-8 lg:px-24 py-2 lg:py-3 rounded-[60px] mb-3 lg:my-5">
                Shop now
              </a>
              <p className="font-bold text-[11px] lg:text-base">
                starting at $599.99
              </p>
            </div>
          </div>
          <div className="card max-w-md w-1/2 font-['Inter'] rounded-lg text-center shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
            <div className="gradient-background rounded-t-lg p-3">
              <img src="./assets/comfort-adapt-hybrid.svg" />
              <h3 className="hidden lg:inline-block text-sm font-semibold">
                ADVANCED PRESSURE-RELIEF
              </h3>
            </div>
            <div className="w-full lg:mx-auto flex-grow px-3">
              <div className="flex items-center justify-center h-12">
                <h2 className="font-['Tiempos'] text-base lg:text-3xl">
                  ComfortAdapt™
                </h2>
              </div>
              <p className="text-sm lg:text-xl">
                Classic EmmaStackTM - progressive pressure relief and natural
                cooling
              </p>
            </div>
            <div className="p-3 lg:pb-8">
              <a className="lg:uppercase text-[13px] lg:text-base btn bg-pizazz text-[white] px-8 lg:px-24 py-2 lg:py-3 rounded-[60px] mb-3 lg:my-5">
                Shop now
              </a>
              <p className="font-bold text-[11px] lg:text-base">
                starting at $599.99
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
