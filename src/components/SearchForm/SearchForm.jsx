import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm_button">
            <span className="SearchForm_button_label">Search</span>
          </button>

          <input
            value={value}
            onChange={this.handleChange}
            className="SearchForm_input"
            type="text"
            autoComplete="off"
          />
        </form>
      </header>
    );
  }
}

export default SearchForm;
