// external imports
import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import devices from 'utils/devices';

// internal imports

export default createGlobalStyle`
  html {
    ${tw`box-border overflow-x-hidden bg-white`};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    ${tw`overflow-x-hidden font-sans`};
  }

  h1 {
  ${tw`w-4/5 mb-3 text-3xl font-semibold break-words`}

  @media (${devices.mobileM}) {
    ${tw`w-full`};
  }
  }

  h2 {
    ${tw`w-4/5 mb-3 text-2xl font-semibold break-words`}

    @media (${devices.mobileM}) {
      ${tw`w-full`};
    }
  }

  h3 {
    ${tw`w-4/5 mb-3 text-xl font-semibold break-words`}

    @media (${devices.mobileM}) {
    ${tw`w-full`};
    }
  }

  h4 {
    ${tw`w-4/5 mb-3 text-lg font-semibold break-words`}

    @media (${devices.mobileM}) {
    ${tw`w-full`};
    }
  }

  p {
    ${tw`mb-4`};
  }

  a {
    ${tw`text-blue-700 hover:underline`}
  

    &:visited {
      ${tw`text-blue-700`}
    }
  }

  address {
    ${tw`inline not-italic`}
  }
`;
