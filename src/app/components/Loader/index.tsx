import React from 'react';
import Spinner from 'react-spinkit';

interface Props {
  color?: string;
}

const Loader = (props: Props) => {
  return <Spinner name='circle' color={props.color} />;
};

export default Loader;
