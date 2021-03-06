import React from 'react';
import Lottie from 'lottie-react';
import { useScenario } from '../../hooks';
import { scenarioTypes } from '../../common/constants';

const baseLottieProps = {
  autoplay: true,
  style: {
    width: '352px',
    margin: '-52px -88px -88px',
  },
};

const Animation = () => {
  const { scenarioType, animation } = useScenario();

  const animationProps = {
    animationData: animation,
    loop: scenarioType === scenarioTypes.waiting,
  };

  const lottieProps = { ...baseLottieProps, ...animationProps };

  return <Lottie {...lottieProps} />;
};

export default Animation;
