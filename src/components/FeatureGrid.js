import React from 'react';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';

import { Icon } from 'primitives';

const FeatureGrid = () => {
  const { features } = useStaticQuery(graphql`
    query FeatureGrid {
      features: allFeature {
        nodes {
          id
          name
          description
          icon
        }
      }
    }
  `);

  return (
    <section className={tw`relative py-16 bg-white sm:py-24 lg:py-32`}>
      <div className={tw`max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl`}>
        <h2 className={tw`text-base font-semibold tracking-wider uppercase text-cyan-600`}>Deploy faster</h2>
        <p className={tw`mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl`}>
          Everything you need to deploy your app
        </p>
        <p className={tw`mx-auto mt-5 text-xl text-gray-500 max-w-prose`}>
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
          malesuada. Eleifend condimentum id viverra nulla.
        </p>

        <div className={tw`mt-12`}>
          <div className={tw`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3`}>
            {features.nodes.map((feature) => (
              <div key={feature.name} className={tw`pt-6`}>
                <div className={tw`flow-root px-6 pb-8 rounded-lg bg-gray-50`}>
                  <div className={`-mt-6`}>
                    <div>
                      <span
                        className={tw`inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600`}
                      >
                        <Icon name={feature.icon} className={tw`w-6 h-6 text-white`} aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className={tw`mt-8 text-lg font-medium tracking-tight text-gray-900`}>{feature.name}</h3>
                    <p className={tw`mt-5 text-base text-gray-500`}>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
