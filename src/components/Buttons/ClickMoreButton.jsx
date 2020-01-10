import React from 'react';
import PropTypes from 'prop-types';

const ClickMoreButton = ({ clickMore }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  return (
    <button onClick={clickMore} className="Button" type="button">
      More
    </button>
  );
};

ClickMoreButton.propTypes = {
  clickMore: PropTypes.func.isRequired,
};

export default ClickMoreButton;
