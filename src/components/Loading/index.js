import React from 'react';
import Lottie from 'lottie-react';
import lottieAnimation from './animation.json';

const lottieProps = {
  animationData: lottieAnimation,
  loop: true,
  autoplay: true,
  style: {
    width: '352px',
    margin: '-88px'
  },
};

const Loading = () => <Lottie {...lottieProps} />;

export default Loading;
