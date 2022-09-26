import Greetings from './View';

export function Loading() {
  return <Greetings loading />;
}

export function ShowName() {
  return <Greetings name="Padawan" />;
}

export function ShowFallbackName() {
  return <Greetings />;
}

export default {title: 'components/Greetings'};
