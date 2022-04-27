import React  from 'react';
import Carousel from '../../elements/Carousel';

export default class OurBlog extends React.Component {
  renderPanelList() {
    const panels = [
      {
        image: '/assets/blog-sample-1.png',
        title: 'Mattress Buying 101: Everything You Need To Know',
        url: 'https://www.emma-sleep.com/blogs/stories/how-to-buy-mattress-emma-sleep',
      },
      {
        image: '/assets/blog-sample-2.png',
        title: 'Get Energized Naturally: How to Awaken Your Best',
        url: 'https://www.emma-sleep.com/blogs/stories/get-energized-naturally',
      },
      {
        image: '/assets/blog-sample-3.png',
        title:
          'Coronasomnia: Why You May Not Be Sleeping Well During The Pandemic',
        url: 'https://www.emma-sleep.com/blogs/stories/coronasomnia-why-you-may-not-be-sleeping-well-during-the-pandemic',
      },
      {
        image: '/assets/blog-sample-4.png',
        title: 'Make The Most Out Of Your Day Based On Your Chronotype',
        url: 'https://www.emma-sleep.com/blogs/stories/make-the-most-out-of-your-day-based-on-your-chronotype',
      },
    ];

    return panels.map(({image, title, url}, i) => (
      <a
        key={i}
        className="flex flex-col items-start w-full rounded-[8px]"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <img src={image} width="100%" height="auto" />

        <p className="md:mt-[15px] text-[20px] text-charade font-semibold">{title}</p>
      </a>
    ));
  }

  render() {
    return (
      <section className="our-blog-section relative flex flex-col items-center w-full">
        <h2 className="heading-2 text-center z-20">
          Wake up to <i className="font-thin">better, happier</i> mornings
        </h2>

        <h4 className="z-20 heading-4 text-comet mt-2.5 font-normal">
          Discover how to awaken your best
        </h4>

        <div className="wallpaper"></div>

        <div className="hidden z-20 md:grid grid-cols-4 gap-4 w-full mt-10">
          {this.renderPanelList()}
        </div>

        <div className="md:hidden z-20 w-full mt-8">
          <Carousel>{this.renderPanelList()}</Carousel>
        </div>
      </section>
    );
  }
}
