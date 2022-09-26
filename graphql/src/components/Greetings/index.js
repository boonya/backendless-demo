import React from 'react';
import Progressbar from '../Progressbar';
import {useMe} from '../../providers/Me/ContextProvider';

export default function Greetings() {
  const {data, loading} = useMe();

  if (loading) {
    return <Progressbar />
  }

  return <p>Hello, {data?.name ? data.name : 'Dude'}!</p>;
}
