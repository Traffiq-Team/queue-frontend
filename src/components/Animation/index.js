import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import blocksAnimation from './blocks.json';
import checkAnimation from './green-check.json';
import { store } from '../../store';

const baseLottieProps = {
  autoplay: true,
  style: {
    width: '352px',
    margin: '-88px', // width / 4
  },
};

const Animation = () => {
  const { state } = useContext(store);
  const { redirectUrl } = state;

  const animationProps = {
    animationData: redirectUrl ? checkAnimation : blocksAnimation,
    loop: !redirectUrl
  };

  const lottieProps = { ...baseLottieProps, ...animationProps };

  return <Lottie {...lottieProps} />;
};

export default Animation;
