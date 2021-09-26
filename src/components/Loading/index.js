import React from 'react';
import Lottie from 'lottie-react';
import lottieAnimation from './lottie.json';

const lottieProps = {
  animationData: lottieAnimation,
  loop: true,
  autoplay: true,
  style: {
    height: '256px',
    marginTop: '-48px',
  },
};

const Loading = () => <Lottie {...lottieProps} />;

export default Loading;
