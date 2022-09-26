import PropTypes from "prop-types"
import React from 'react';
import Progressbar from '../Progressbar';

export default function Greetings({name, loading}) {

  if (loading) {
    return <Progressbar />
  }

  return <p>Hello, {name || 'Dude'}!</p>;
}

Greetings.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string,
}

Greetings.defaultProps = {
  loading: false,
  name: undefined,
}
