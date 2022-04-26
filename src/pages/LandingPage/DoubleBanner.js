import React  from 'react';

const LeftBannerStyles = {
  backgroundImage: `url('/assets/double-banner-left.svg'), url('/assets/left-ellipse.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
  backgroundSize: 'contain',
};

const RightBannerStyles = {
  backgroundImage: `url('/assets/double-banner-right.svg'), url('/assets/right-ellipse.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
  backgroundSize: 'contain',
};

export default class DoubleBanner extends React.Component {
  render() {
    return (
      <section className="w-full h-max lg:h-[35rem] flex flex-wrap lg:flex-nowrap p-3 lg:py-4 lg:px-2">
        <div
          className="lg:mx-2 h-[25rem] lg:h-full w-full lg:w-3/6 rounded-lg lg:p-8 bg-serenade relative bg-contain mb-3"
          style={LeftBannerStyles}
        >
          <div className="h-full flex flex-col justify-between lg:justify-start p-2 lg:p-0">
            <div className="w-4/5 lg:w-3/5">
              <h2 className="font-['Tiempos'] text-3xl lg:text-4xl">
                Climb onto our best mattress yet
              </h2>
              <p className="text-base lg:text-xl pb-4 font-['Inter']">
                Pressure-relieving comfort meets enhanced support
              </p>
            </div>
            <a
              href="https://www.emma-sleep.com/collections/on-sale "
              className="btn bg-pizazz text-[white] py-3.5 px-6 w-max mx-auto lg:mx-0"
            >
              SHOP COMFORTADAPT™ HYBRID
            </a>
          </div>
          <div className="circle bg-pizazz absolute right-7 top-1/3 lg:top-1/4 h-14 w-14 lg:h-28 lg:w-28">
            <span className="w-3/6 text-center">30% OFF</span>
          </div>
        </div>
        <div
          className="lg:mx-2 h-[18rem] lg:h-full w-full lg:w-3/6 bg-athens-gray rounded-lg lg:p-8 relative bg-contain"
          style={RightBannerStyles}
        >
          <div className="h-full flex flex-col justify-between lg:justify-start p-2 lg:p-0">
            <div className="w-4/5 lg:w-3/5">
              <h2 className="font-['Tiempos'] text-3xl lg:text-4xl">
                Time for an upgrade
              </h2>
              <p className="text-base lg:text-xl pb-4 font-['Inter']">
                Bedroom essentials at prices you won't lose sleep over
              </p>
            </div>
            <a
              href="https://www.emma-sleep.com/collections/on-sale "
              className="btn bg-chambray text-[white] py-3.5 px-14 w-max mx-auto lg:mx-0"
            >
              DISCOVER MORE
            </a>
          </div>

          <div className="circle bg-chambray absolute right-7 top-1/3 lg:top-1/4 h-14 w-14 lg:h-28 lg:w-28">
            <span className="w-3/6 text-center">30% OFF</span>
          </div>
        </div>
      </section>
    );
  }
}
