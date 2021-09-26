import React from 'react';
import Lottie from 'lottie-react';
import lottieAnimation from './lottie.json';

const lottieProps = {
  animationData: lottieAnimation,
  loop: true,
  autoplay: true,
  style: {
    height: '312px',
    margin: '0 auto',
    marginTop: '-64px'
  },
};

const Loading = () => <Lottie {...lottieProps} />;

export default Loading;
