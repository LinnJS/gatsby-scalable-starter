import React from 'react';
import PropTypes from 'prop-types';

import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

const Icon = ({ name, ...rest }) => {
  switch (name) {
    case 'CloudUploadIcon':
      return <CloudUploadIcon {...rest} />;
    case 'CogIcon':
      return <CogIcon {...rest} />;
    case 'LockClosedIcon':
      return <LockClosedIcon {...rest} />;
    case 'RefreshIcon':
      return <RefreshIcon {...rest} />;
    case 'ServerIcon':
      return <ServerIcon {...rest} />;
    case 'ShieldCheckIcon':
      return <ShieldCheckIcon {...rest} />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
