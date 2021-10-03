import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import classNames from 'classnames';

const Button = ({ children, type, variation, href, onClick }) => {
  const buttonClasses = classNames(styles.button, styles[variation]);

  const renderButton = () => {
    switch (type) {
      case 'button':
        return <button className={buttonClasses} onClick={onClick}>{children}</button>;
      case 'link':
        return <a className={buttonClasses} href={href}>{children}</a>;
      default:
        return null;
    }
  };

  return renderButton();
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['link', 'button']),
  variation: PropTypes.oneOf(['primary']),
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variation: 'primary',
  href: null,
  onClick: () => {},
};

export default Button;
