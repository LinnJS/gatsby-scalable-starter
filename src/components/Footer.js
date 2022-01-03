import React from 'react';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';

import { Icon } from 'primitives';

const Footer = () => {
  const { footerContent } = useStaticQuery(graphql`
    query FooterContent {
      footerContent: file(name: { eq: "footer" }) {
        childrenJsonJson {
          solutions {
            href
            name
          }
          support {
            href
            name
          }
          company {
            href
            name
          }
          legal {
            href
            name
          }
          social {
            href
            icon
            name
          }
        }
      }
    }
  `);

  const { solutions, support, company, social, legal } = footerContent.childrenJsonJson[0];

  return (
    <footer className={tw`bg-gray-50`} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className={tw`sr-only`}>
        Footer
      </h2>

      <div className={tw`max-w-md px-4 pt-12 mx-auto sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8`}>
        <div className={tw`xl:grid xl:grid-cols-3 xl:gap-8`}>
          <div className={tw`space-y-8 xl:col-span-1`}>
            <img
              className={tw`h-10`}
              src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
              alt="Company name"
            />
            <p className={tw`text-base text-gray-500`}>
              Making the world a better place through constructing elegant hierarchies.
            </p>

            <div className={tw`flex space-x-6`}>
              {social.map((item) => (
                <a key={item.name} href={item.href} className={tw`text-gray-400 hover:text-gray-500`}>
                  <span className={tw`sr-only`}>{item.name}</span>
                  <Icon name={item.icon} className={tw`w-6 h-6`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className={tw`grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2`}>
            <div className={tw`md:grid md:grid-cols-2 md:gap-8`}>
              <div>
                <h3 className={tw`text-sm font-semibold tracking-wider text-gray-400 uppercase`}>Solutions</h3>
                <ul className={tw`mt-4 space-y-4`}>
                  {solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={tw`text-base text-gray-500 hover:text-gray-900`}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={tw`mt-12 md:mt-0`}>
                <h3 className={tw`text-sm font-semibold tracking-wider text-gray-400 uppercase`}>Support</h3>
                <ul className={tw`mt-4 space-y-4`}>
                  {support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={tw`text-base text-gray-500 hover:text-gray-900`}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={tw`md:grid md:grid-cols-2 md:gap-8`}>
              <div>
                <h3 className={tw`text-sm font-semibold tracking-wider text-gray-400 uppercase`}>Company</h3>
                <ul className={tw`mt-4 space-y-4`}>
                  {company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={tw`text-base text-gray-500 hover:text-gray-900`}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={tw`mt-12 md:mt-0`}>
                <h3 className={tw`text-sm font-semibold tracking-wider text-gray-400 uppercase`}>Legal</h3>
                <ul className={tw`mt-4 space-y-4`}>
                  {legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className={tw`text-base text-gray-500 hover:text-gray-900`}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={tw`py-8 mt-12 border-t border-gray-200`}>
          <p className={tw`text-base text-gray-400 xl:text-center`}>&copy; 2020 Workflow, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
