import React from 'react';
import Lottie from 'lottie-react';
import { useScenario } from '../../hooks';
import { scenarioTypes } from '../../common/constants';

const baseLottieProps = {
  autoplay: true,
  style: {
    width: '352px',
    margin: '-88px', // width / 4
  },
};

const Animation = () => {
  const { type: scenarioType, animation } = useScenario();

  const animationProps = {
    animationData: animation,
    loop: scenarioType === scenarioTypes.loading,
  };

  const lottieProps = { ...baseLottieProps, ...animationProps };

  return <Lottie {...lottieProps} />;
};

export default Animation;
