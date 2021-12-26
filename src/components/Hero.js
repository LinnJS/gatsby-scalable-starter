//  external imports
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { tw } from 'twind';

// internal imports
import { GatsbyTech } from 'assets/svgs';

const Hero = () => {
  return (
    <section className={tw`pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden`}>
      <div className={tw`mx-auto max-w-7xl lg:px-8`}>
        <div className={tw`lg:grid lg:grid-cols-2 lg:gap-8`}>
          <div
            className={tw`max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center`}
          >
            <div className={tw`lg:py-24`}>
              <a
                href="#"
                className={tw`inline-flex items-center p-1 pr-2 text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200`}
              >
                <span
                  className={tw`px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full`}
                >
                  We&apos;re hiring
                </span>

                <span className={tw`ml-4 text-sm`}>Visit our careers page</span>
                <ChevronRightIcon className={tw`w-5 h-5 ml-2 text-gray-500`} aria-hidden="true" />
              </a>
              <h1
                className={tw`mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl`}
              >
                <span className={tw`block`}>A better way to</span>
                <span
                  className={tw`block pb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5`}
                >
                  ship web apps
                </span>
              </h1>
              <p className={tw`text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl`}>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat.
              </p>

              <div className={tw`mt-10 sm:mt-12`}>
                <form action="#" className={tw`sm:max-w-xl sm:mx-auto lg:mx-0`}>
                  <div className={tw`sm:flex`}>
                    <div className={tw`flex-1 min-w-0`}>
                      <label htmlFor="email" className={tw`sr-only`}>
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className={tw`block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900`}
                      />
                    </div>
                    <div className={tw`mt-3 sm:mt-0 sm:ml-3`}>
                      <button
                        type="submit"
                        className={tw`block w-full px-4 py-3 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900`}
                      >
                        Start free trial
                      </button>
                    </div>
                  </div>
                  <p className={tw`mt-3 text-sm text-gray-300 sm:mt-4`}>
                    Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our{' '}
                    <a href="#" className={tw`font-medium text-white`}>
                      terms of service
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className={tw`mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative`}>
            <div className={tw`max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0`}>
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <GatsbyTech
                className={tw`w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
