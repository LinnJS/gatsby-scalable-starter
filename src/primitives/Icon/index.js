/* eslint-disable react/display-name */
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

import { FacebookIcon, InstagramIcon, TwitterIcon, GithubIcon, DribbbleIcon } from './icons';

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
    case 'Facebook':
      return <FacebookIcon {...rest} />;
    case 'Instagram':
      return <InstagramIcon {...rest} />;
    case 'Twitter':
      return <TwitterIcon {...rest} />;
    case 'Github':
      return <GithubIcon {...rest} />;
    case 'Dribbble':
      return <DribbbleIcon {...rest} />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
