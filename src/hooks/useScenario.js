import { useContext } from 'react';
import { store } from '../store';
import { blocksAnimation, errorAnimation, readyAnimation } from '../assets/lottie';
import { scenarioTypes, colors } from '../common/constants';

const waitingScenario = {
  scenarioType: scenarioTypes.waiting,
  description: 'Your current position in the queue is',
  documentTitle: '⌛ Waiting in line...',
  animation: blocksAnimation,
  backgroundColor: colors.WHITE,
};

const readyScenario = {
  scenarioType: scenarioTypes.ready,
  description: 'Your site is ready to be visited!',
  documentTitle: '✅ Ready to go!',
  animation: readyAnimation,
  backgroundColor: colors.LIGHT_GREEN,
};

const errorScenario = {
  scenarioType: scenarioTypes.error,
  description: 'Uh oh, something went wrong! We\'re getting this fixed in the background; you\'ll be back in line momentarily',
  documentTitle: '❌ Something went wrong!',
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
