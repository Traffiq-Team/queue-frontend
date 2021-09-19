import React from 'react';
import Lottie from 'lottie-react';
import lottieAnimation from './lottie.json';

const lottieProps = {
  animationData: lottieAnimation,
  loop: true,
  autoplay: true,
  style: {
    width: '512px',
    margin: '0 auto',
  },
};

const Loading = () => <Lottie {...lottieProps} />;

export default Loading;
