import react from 'react';

const LeftBannerStyles = {
  backgroundImage: `url('/assets/double-banner-left.svg'), url('/assets/left-ellipse.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
};

const RightBannerStyles = {
  backgroundImage: `url('/assets/double-banner-right.svg'), url('/assets/right-ellipse.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
};

export default class DoubleBanner extends react.Component {
  render() {
    return (
      <section className="w-100 h-[35rem] flex py-4 px-2">
        <div
          className="mx-2 w-3/6 rounded-lg p-8 bg-serenade relative"
          style={LeftBannerStyles}
        >
          <div className="w-3/5">
            <h2 className="font-['TiemposRegular'] text-4xl">
              Climb onto our best mattress yet
            </h2>
            <p className="text-xl pb-4 font-['Inter']">
              Pressure-relieving comfort meets enhanced support
            </p>
            <a
              href="https://www.emma-sleep.com/collections/on-sale "
              className="btn bg-pizazz text-[white] py-3.5 px-6"
            >
              SHOP COMFORTADAPT™ HYBRID
            </a>
          </div>
          <div className="circle bg-pizazz absolute right-7 top-1/4">
            <span className="w-3/6 text-center">30% OFF</span>
          </div>
        </div>
        <div
          className="mx-2 w-3/6 bg-athens-gray rounded-lg p-8 relative"
          style={RightBannerStyles}
        >
          <div className="w-3/5">
            <h2 className="font-['TiemposRegular'] text-4xl">
              Time for an upgrade
            </h2>
            <p className="text-xl pb-4 font-['Inter']">
              Bedroom essentials at prices you won't lose sleep over
            </p>
            <a
              href="https://www.emma-sleep.com/collections/on-sale "
              className="btn bg-chambray text-[white] py-3.5 px-14"
            >
              DISCOVER MORE
            </a>
          </div>
          <div className="circle bg-chambray absolute right-7 top-1/4">
            <span className="w-3/6 text-center">30% OFF</span>
          </div>
        </div>
      </section>
    );
  }
}
