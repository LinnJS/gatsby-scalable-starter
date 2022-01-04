import React from 'react';
import tw from 'twin.macro';

const FeaturePreview = () => {
  return (
    <section css={tw`relative pt-16 bg-gray-50 sm:pt-24 lg:pt-32`}>
      <div css={tw`max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl`}>
        <div>
          <h2 css={tw`text-base font-semibold tracking-wider uppercase text-cyan-600`}>Serverless</h2>
          <p css={tw`mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl`}>No server? No problem.</p>
          <p css={tw`mx-auto mt-5 text-xl text-gray-500 max-w-prose`}>
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
            malesuada. Eleifend condimentum id viverra nulla.
          </p>
        </div>

        <div css={tw`mt-12 -mb-10 sm:-mb-24 lg:-mb-80`}>
          <img
            css={tw`rounded-lg shadow-xl ring-1 ring-black ring-opacity-5`}
            src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturePreview;
