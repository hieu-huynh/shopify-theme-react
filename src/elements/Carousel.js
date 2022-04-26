import React from 'react';
import AwesomeSlider from 'react-awesome-slider';

export default function Carousel(props) {
  const {children, infinite = false} = props;

  return <AwesomeSlider infinite={infinite}>{children}</AwesomeSlider>;
}
