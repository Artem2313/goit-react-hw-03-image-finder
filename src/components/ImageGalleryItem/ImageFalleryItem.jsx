import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item: { smallImageLink, id, tags }, clickImg }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => clickImg(id)}
      role="presentation"
    >
      <img
        id={id}
        src={smallImageLink}
        alt={tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    smallImageLink: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  clickImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
