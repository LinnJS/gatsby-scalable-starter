import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { tw } from 'twind';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const Header = () => {
  return (
    <Popover as="header" className={tw`relative`}>
      <div className={tw`pt-6 bg-gray-900`}>
        <nav
          className={tw`relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6`}
          aria-label="Global"
        >
          <div className={tw`flex items-center flex-1`}>
            <div className={tw`flex items-center justify-between w-full md:w-auto`}>
              <a href="#">
                <span className={`sr-only`}>Workflow</span>
                <img
                  className={tw`w-auto h-8 sm:h-10`}
                  src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
                  alt=""
                />
              </a>
              <div className={tw`flex items-center -mr-2 md:hidden`}>
                <Popover.Button
                  className={tw`inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white`}
                >
                  <span className={tw`sr-only`}>Open main menu</span>
                  <MenuIcon className={tw`w-6 h-6`} aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className={tw`hidden space-x-8 md:flex md:ml-10`}>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={tw`text-base font-medium text-white hover:text-gray-300`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className={tw`hidden md:flex md:items-center md:space-x-6`}>
            <a href="#" className={tw`text-base font-medium text-white hover:text-gray-300`}>
              Log in
            </a>
            <a
              href="#"
              className={tw`inline-flex items-center px-4 py-2 text-base font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700`}
            >
              Start free trial
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className={tw`absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden`}>
          <div className={tw`overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5`}>
            <div className={tw`flex items-center justify-between px-5 pt-4`}>
              <div>
                <img
                  className={tw`w-auto h-8`}
                  src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                  alt=""
                />
              </div>
              <div className={tw`-mr-2`}>
                <Popover.Button
                  className={tw`inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600`}
                >
                  <span className={tw`sr-only`}>Close menu</span>
                  <XIcon className={tw`w-6 h-6`} aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className={tw`pt-5 pb-6`}>
              <div className={tw`px-2 space-y-1`}>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={tw`block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className={tw`px-5 mt-6`}>
                <a
                  href="#"
                  className={tw`block w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700`}
                >
                  Start free trial
                </a>
              </div>
              <div className={tw`px-5 mt-6`}>
                <p className={tw`text-base font-medium text-center text-gray-500`}>
                  Existing customer?{' '}
                  <a href="#" className={tw`text-gray-900 hover:underline`}>
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
