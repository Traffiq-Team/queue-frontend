import { useContext } from 'react';
import { store } from '../store';
import { blocksAnimation, errorAnimation, readyAnimation } from '../assets/lottie';
import { scenarioTypes, colors } from '../common/constants';

const waitingScenario = {
  type: scenarioTypes.waiting,
  description: 'Your current position in the queue is',
  callToAction: '',
  animation: blocksAnimation,
  backgroundColor: colors.WHITE,
};

const readyScenario = {
  type: scenarioTypes.ready,
  description: 'Your site is ready to be visited!',
  callToAction: 'Take me there',
  animation: readyAnimation,
  backgroundColor: colors.LIGHT_GREEN,
};

const errorScenario = {
  type: scenarioTypes.error,
  description: 'Uh oh, something went wrong!',
  callToAction: 'Try again',
  animation: errorAnimation,
  backgroundColor: colors.LIGHT_RED,
};

const useScenario = () => {
  const { state } = useContext(store);
  const { redirectUrl, error } = state;
  let scenario = waitingScenario;

  if (redirectUrl) {
    scenario = readyScenario;
  } else if (error) {
    scenario = errorScenario;
  }

  return scenario;
};

export default useScenario;
