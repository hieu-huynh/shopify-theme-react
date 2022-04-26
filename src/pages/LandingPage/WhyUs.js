import React from 'react';


export default class WhyUs extends React.Component {
  render() {
    const panels = [
      {
        icon: '/assets/three-star-round.svg',
        title: 'Sleep Brand\nin the World',
        content: `As the biggest sleep company in the world, we guarantee you sleep that energizes and empowers you. Join more than 2 million happy sleepers who Awakened their Best with us!`
      },
      {
        icon: '/assets/atom.svg',
        title: `Masters of\nSleep Technology `,
        content: `Our sleep experts have mastered designing award-winning mattresses crafted to keep you relaxed and recharged, no matter what kind of sleeper you are. `
      },
      {
        icon: '/assets/sleep-moon.svg',
        title: 'Sleep with Ease,\nShop with Ease',
        content: `We take the stress out of sleep shopping. We got you covered through our free shipping, 100-night trial, 10-year warranty, and 100% money-back guarantee (yup, free returns).`
      }
    ];

    const learnMoreUrl =
      'https://www.emma-sleep.com/pages/meet-the-sleep-experts';

    return (
      <section className="why-us-section flex justify-center w-full bg-athens-gray">
        <div className="flex flex-col items-center w-11/12 md:w-9/12">
          <h2 className="heading-2 text-center">
            Why sleepers <span className="italic">love</span> Emma
          </h2>

          <div className="grid grid-rows-3 gap-8  md:flex md:flex-nowrap mt-9 md:mt-14">
            {panels.map(({icon, title, content}, i) => (
              <div
                key={i}
                className=" w-full flex flex-col items-center justify-start text-center"
              >
                <img
                  src={icon}
                  width="auto"
                  height="auto"
                  className="w-9 h-9 md:w-16 md:h-16"
                />

                <h3 className="heading-3 mt-5 mb-2">
                  <span>{title}</span>
                </h3>

                <p className="text-comet">{content}</p>
              </div>
            ))}
          </div>

          <a
            className="btn bg-chambray text-[white] uppercase px-24 py-3 rounded-[60px] mt-6 md:mt-9"
            href={learnMoreUrl}
            target="_blank"
          >
            learn more
          </a>
        </div>
      </section>
    );
  }
}
