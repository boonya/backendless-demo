import ContextProvider from './ContextProvider';
import useFetchMe from './useFetchMe';
import PropTypes from 'prop-types';

export default function Me({children}) {
  const result = useFetchMe();

  return (
    <ContextProvider {...result}>
      {children}
    </ContextProvider>
  );
}

Me.displayName = 'Me.DataProvider';

Me.propTypes = {
  children: PropTypes.node.isRequired,
};
