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
    <section css={tw`relative py-16 bg-gray-50 sm:py-24 lg:py-32`}>
      <div css={tw`relative`}>
        <div css={tw`max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl`}>
          <h2 css={tw`text-base font-semibold tracking-wider uppercase text-cyan-600`}>Learn</h2>
          <p css={tw`mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl`}>Helpful Resources</p>
          <p css={tw`mx-auto mt-5 text-xl text-gray-500 max-w-prose`}>
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
            malesuada. Eleifend condimentum id viverra nulla.
          </p>
        </div>

        <div css={tw`grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl`}>
          {blogPosts.nodes.map(({ childMarkdownRemark }) => {
            const frontmatter = childMarkdownRemark?.frontmatter;
            const { id, timeToRead } = childMarkdownRemark;
            const { category, author, imageUrl, title, preview, datetime, date, href } = frontmatter;

            return (
              <div key={id} css={tw`flex flex-col overflow-hidden rounded-lg shadow-lg`}>
                <div css={tw`flex-shrink-0`}>
                  <img css={tw`object-cover w-full h-48`} src={imageUrl} alt="" />
                </div>

                <div css={tw`flex flex-col justify-between flex-1 p-6 bg-white`}>
                  <div css={tw`flex-1`}>
                    <p css={tw`text-sm font-medium text-cyan-600`}>
                      <a href={category.href} css={tw`hover:underline`}>
                        {category.name}
                      </a>
                    </p>
                    <a href={href} css={tw`block mt-2`}>
                      <p css={tw`text-xl font-semibold text-gray-900`}>{title}</p>
                      <p css={tw`mt-3 text-base text-gray-500`}>{preview}</p>
                    </a>
                  </div>

                  <div css={tw`flex items-center mt-6`}>
                    <div css={tw`flex-shrink-0`}>
                      <a href={author.href}>
                        <img css={tw`w-10 h-10 rounded-full`} src={author.imageUrl} alt={author.name} />
                      </a>
                    </div>

                    <div css={tw`ml-3`}>
                      <p css={tw`text-sm font-medium text-gray-900`}>
                        <a href={author.href} css={tw`hover:underline`}>
                          {author.name}
                        </a>
                      </p>
                      <div css={tw`flex space-x-1 text-sm text-gray-500`}>
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
