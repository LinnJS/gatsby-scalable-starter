import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import tw from 'twin.macro';

const CallToAction = () => {
  return (
    <section css={tw`relative bg-gray-900`}>
      <div css={tw`relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2`}>
        <img
          css={tw`object-cover w-full h-full`}
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
          alt=""
        />
        <div
          aria-hidden="true"
          css={tw`absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply`}
        />
      </div>
      <div css={tw`relative max-w-md px-4 py-12 mx-auto sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32`}>
        <div css={tw`md:ml-auto md:w-1/2 md:pl-10`}>
          <h2 css={tw`text-base font-semibold tracking-wider text-gray-300 uppercase`}>Award winning support</h2>
          <p css={tw`mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl`}>We’re here to help</p>
          <p css={tw`mt-3 text-lg text-gray-300`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div css={tw`mt-8`}>
            <div css={tw`inline-flex rounded-md shadow`}>
              <a
                href="#"
                css={tw`inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50`}
              >
                Visit the help center
                <ExternalLinkIcon css={tw`w-5 h-5 ml-3 -mr-1 text-gray-400`} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
