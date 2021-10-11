
import React from 'react';
import { Button } from 'evergreen-ui';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

/**
 * Wrapper for Evergreen UI's primary button due
 * to inflexibility with modifying primary color
 */
const PrimaryButton = ({ children, onClick, iconBefore, size, isLoading }) => {
  return (
    <Button
      appearance="primary"
      className={styles.button}
      iconBefore={iconBefore}
      size={size}
      onClick={onClick}
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconBefore: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isLoading: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  onClick: () => {},
  iconBefore: null,
  size: 'small',
  isLoading: false,
};

export default PrimaryButton;
