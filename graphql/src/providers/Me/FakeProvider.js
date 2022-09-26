import ContextProvider from './ContextProvider';
import ME_RESPONSE from './__response__/successful';
import {useResponse} from './useFetchMe';
import PropTypes from 'prop-types';

export default function FakeProvider({children, ...response}) {
  const payload = useResponse({data: ME_RESPONSE, ...response});

  return <ContextProvider {...payload}>{children}</ContextProvider>;
}

FakeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
