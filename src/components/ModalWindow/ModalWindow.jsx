import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalWindow extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    imageID: PropTypes.number.isRequired,
    clickImg: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.closeImg);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeImg);
  }

  closeImg = e => {
    const { clickImg } = this.props;
    if (e.code !== 'Escape') return;
    clickImg();
  };

  handleCloseImg = e => {
    const { clickImg } = this.props;
    if (e.target.className !== 'Overlay') return;
    clickImg();
  };

  render() {
    const { items, imageID } = this.props;
    const itemImage = items.find(item => item.id === Number(imageID));
    return (
      <div
        onClick={this.handleCloseImg}
        className="Overlay"
        role="presentation"
      >
        <div className="Modal">
          <img src={itemImage.largeImageLink} alt={itemImage.tags} />
        </div>
      </div>
    );
  }
}

export default ModalWindow;
