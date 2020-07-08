import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const DynamicComponent = (dynamicImport) => {
  const Component = React.lazy(dynamicImport);

  return (props) => (
    <React.Suspense fallback={<CircularProgress />}>
      <Component {...props} />
    </React.Suspense>
  );
};

DynamicComponent.propTypes = {
  dynamicImport: PropTypes.func,
};

export default DynamicComponent;
