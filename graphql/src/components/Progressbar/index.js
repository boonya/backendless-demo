import './Progressbar.css';
import React, {forwardRef} from 'react';

const Progressbar = forwardRef((props, ref) => {
  return (
    <p ref={ref} role="progressbar" className="progressbar" {...props}>
      Please wait...
    </p>
  );
});

Progressbar.displayName = 'Progressbar';

export default Progressbar;
