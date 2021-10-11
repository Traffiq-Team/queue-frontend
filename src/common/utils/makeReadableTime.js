import moment from 'moment';

const withSeconds = 's [sec]';
const withMinutes = `m [min] ${withSeconds}`;
const withHours = `h [hr] ${withMinutes}`;

const makeReadableTime = (time) => {
  const seconds = time / 1000;
  const minutes = time / (1000 * 60);

  if (seconds < 60) {
    return moment(time).format(withSeconds);
  }

  if (minutes < 60) {
    return moment(time).format(withMinutes);
  }

  return moment(time).format(withHours);
};

export default makeReadableTime;
