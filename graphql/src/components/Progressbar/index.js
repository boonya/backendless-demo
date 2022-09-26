import React, {forwardRef} from 'react';

const Progressbar = forwardRef((props, ref) => {
  return (
    <div ref={ref} role="progressbar" {...props}>
      Please wait...
    </div>
  );
});

Progressbar.displayName = 'Progressbar';

export default Progressbar;
