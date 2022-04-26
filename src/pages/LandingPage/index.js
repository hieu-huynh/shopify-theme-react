import React  from 'react';
import DoubleBanner from './DoubleBanner';
import ComfortThatAdapts from './ComfortThatAdapts';
import WhyUs from './WhyUs';
import ShoppingInvitation from './ShoppingInvitation';
import ComfortCelecratedAndTrusted from './ComfortCelecratedAndTrusted';
import OurBlog from './OurBlog';
import ContactUs from './ContactUs';

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <DoubleBanner />
      <ComfortThatAdapts />
      <WhyUs />
      <ShoppingInvitation />
      <ComfortCelecratedAndTrusted />
      <OurBlog />
      <ContactUs />
    </div>
  )
}
