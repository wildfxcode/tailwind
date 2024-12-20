import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* Title and Description */}
      <div className="my-3 flex flex-col items-center gap-x-12 xl:mb-9 xl:flex-row">
        {/* In-between margin */}
        <div className="flex-1 pt-3">
          {/* In-between padding top */}
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            &lt;/Learn_Code&gt;
          </h1>
          <p className="mb-6 mt-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <h2 className="center text-lg text-gray-600 dark:text-gray-400">
            {`Interested in a new career transition? Check out our available `}
            <a
              href="https://wildfx.io/courses"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              courses
            </a>
            {` or try the free `}
            <a
              href="https://wildfx.io/blog/code-of-the-lion"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Code Challenge
            </a>
            {`. Discover how we're changing the way people learn and interact with data in the modern age.`}
          </h2>
        </div>

        {/* Newsletter Form */}
        <div className="mx-2 my-12 flex w-[300px] items-center justify-center sm:w-[400px] md:w-[550px]">
          <NewsletterForm title="Subscribe to the newsletter" />
        </div>
      </div>

      {/* Latest Posts */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-12">
            Articles
          </h2>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h3>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {/* View All Posts */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            View All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
