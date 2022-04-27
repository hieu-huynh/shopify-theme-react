import React from 'react';

export default class ShoppingInvitation extends React.Component {
  render() {
    const panels = [
      {
        icon: '/assets/sample-mattress.png',
        title: 'Mattresses',
        badge: `Up to 20% off`,
        url: 'https://www.emma-sleep.com/collections/mattresses',
      },
      {
        icon: '/assets/sample-pillows.png',
        title: 'Pillows',
        badge: `Up to 20% off`,
        url: 'https://www.emma-sleep.com/collections/pillows',
      },
      {
        icon: '/assets/sample-bed.png',
        title: 'Beds',
        badge: `Up to 20% off`,
        url: 'https://www.emma-sleep.com/collections/beds',
      },
      {
        icon: '/assets/sample-accessories.png',
        title: 'Accessories',
        badge: `Up to 20% off`,
        url: 'https://www.emma-sleep.com/collections/accessories',
      },
    ];

    return (
      <section className="shopping-invitation flex flex-col items-start w-full">
        <h2 className="heading-2">Shop our products</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full mt-5 md:mt-8">
          {panels.map(({icon, title, badge, url}, i) => (
            <a
              key={i}
              className="shopping-invitation__card flex flex-col items-start rounded-[8px]"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-start m-2.5 md:m-6">
                <p className="hidden md:block mb-[10px] py-1.5 px-2 rounded-[4px] bg-green-pea text-[white] text-[11px] md:text-[13px] uppercase">
                  {badge}
                </p>
                <p className="text-[13px] md:text-[31px] text-charade font-semibold md:font-normal">
                  {title}
                </p>
                <p className="md:hidden py-[3px] md:py-1.5 px-[6.5px] md:px-2 rounded-[4px] bg-green-pea text-[white] text-[11px] md:text-[13px] uppercase">
                  {badge}
                </p>
              </div>

              <img
                src={icon}
                width="100%"
                height="auto"
                className={`flex flex-1 items-end mb-2 md:mb-6 scale-[0.8] ${
                  i === 2 ? 'origin-bottom' : 'origin-bottom-left'
                } md:transform-none`}
              />
            </a>
          ))}
        </div>
      </section>
    );
  }
}
