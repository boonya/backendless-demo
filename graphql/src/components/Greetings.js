import React from 'react'
import {useMe} from '../providers/Me/ContextProvider'

export default function Greetings() {
  const {data} = useMe();
  return <p>Hello, {data?.name ? data.name : 'Dude'}!</p>;
}
