import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const homeProps = {};

class HomeFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>Lyssa Writing &copy; 2020 Richard Clayton</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
      </React.Fragment>
    );
  }
}

HomeFooter.propTypes = propTypes;
HomeFooter.homeProps = homeProps;

export default HomeFooter;
