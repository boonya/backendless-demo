import React from 'react';
import View from '/View';
import {useMe} from '../../providers/Me/ContextProvider';

export default function Greetings() {
  const {data, loading} = useMe();

  return <View name={data?.name} loading={loading} />
  // if (loading) {
  //   return <Progressbar />
  // }

  // return <p>Hello, {data?.name ? data.name : 'Dude'}!</p>;
}
