import React from 'react';
import { tw } from 'twind';

const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
];

const Blog = () => {
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
          {blogPosts.map((post) => (
            <div key={post.id} className={tw`flex flex-col overflow-hidden rounded-lg shadow-lg`}>
              <div className={tw`flex-shrink-0`}>
                <img className={tw`object-cover w-full h-48`} src={post.imageUrl} alt="" />
              </div>

              <div className={tw`flex flex-col justify-between flex-1 p-6 bg-white`}>
                <div className={tw`flex-1`}>
                  <p className={tw`text-sm font-medium text-cyan-600`}>
                    <a href={post.category.href} className={tw`hover:underline`}>
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className={tw`block mt-2`}>
                    <p className={tw`text-xl font-semibold text-gray-900`}>{post.title}</p>
                    <p className={tw`mt-3 text-base text-gray-500`}>{post.preview}</p>
                  </a>
                </div>

                <div className={tw`flex items-center mt-6`}>
                  <div className={tw`flex-shrink-0`}>
                    <a href={post.author.href}>
                      <img className={tw`w-10 h-10 rounded-full`} src={post.author.imageUrl} alt={post.author.name} />
                    </a>
                  </div>

                  <div className={tw`ml-3`}>
                    <p className={tw`text-sm font-medium text-gray-900`}>
                      <a href={post.author.href} className={tw`hover:underline`}>
                        {post.author.name}
                      </a>
                    </p>
                    <div className={tw`flex space-x-1 text-sm text-gray-500`}>
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingLength} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
