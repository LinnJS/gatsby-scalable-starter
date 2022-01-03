import React from 'react';
import tw from 'twin.macro';
import { graphql, useStaticQuery } from 'gatsby';

const Blog = () => {
  const { blogPosts } = useStaticQuery(graphql`
    query AllBlogs {
      blogPosts: allFile(filter: { sourceInstanceName: { eq: "blogPosts" } }) {
        nodes {
          childMarkdownRemark {
            id
            timeToRead
            frontmatter {
              title
              preview
              path
              imageUrl
              date
              datetime
              author {
                name
                href
                imageUrl
              }
              category {
                name
                href
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section className={tw`relative py-16 bg-gray-50 sm:py-24 lg:py-32`}>
      <div className={tw`relative`}>
        <div className={tw`max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl`}>
          <h2 className={tw`text-base font-semibold tracking-wider uppercase text-cyan-600`}>Learn</h2>
          <p className={tw`mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl`}>Helpful Resources</p>
          <p className={tw`mx-auto mt-5 text-xl text-gray-500 max-w-prose`}>
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
            malesuada. Eleifend condimentum id viverra nulla.
          </p>
        </div>

        <div
          className={tw`grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl`}
        >
          {blogPosts.nodes.map(({ childMarkdownRemark }) => {
            const frontmatter = childMarkdownRemark?.frontmatter;
            const { id, timeToRead } = childMarkdownRemark;
            const { category, author, imageUrl, title, preview, datetime, date, href } = frontmatter;

            return (
              <div key={id} className={tw`flex flex-col overflow-hidden rounded-lg shadow-lg`}>
                <div className={tw`flex-shrink-0`}>
                  <img className={tw`object-cover w-full h-48`} src={imageUrl} alt="" />
                </div>

                <div className={tw`flex flex-col justify-between flex-1 p-6 bg-white`}>
                  <div className={tw`flex-1`}>
                    <p className={tw`text-sm font-medium text-cyan-600`}>
                      <a href={category.href} className={tw`hover:underline`}>
                        {category.name}
                      </a>
                    </p>
                    <a href={href} className={tw`block mt-2`}>
                      <p className={tw`text-xl font-semibold text-gray-900`}>{title}</p>
                      <p className={tw`mt-3 text-base text-gray-500`}>{preview}</p>
                    </a>
                  </div>

                  <div className={tw`flex items-center mt-6`}>
                    <div className={tw`flex-shrink-0`}>
                      <a href={author.href}>
                        <img className={tw`w-10 h-10 rounded-full`} src={author.imageUrl} alt={author.name} />
                      </a>
                    </div>

                    <div className={tw`ml-3`}>
                      <p className={tw`text-sm font-medium text-gray-900`}>
                        <a href={author.href} className={tw`hover:underline`}>
                          {author.name}
                        </a>
                      </p>
                      <div className={tw`flex space-x-1 text-sm text-gray-500`}>
                        <time dateTime={datetime}>{date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{timeToRead} minute read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
