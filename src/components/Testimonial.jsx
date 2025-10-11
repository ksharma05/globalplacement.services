import React from 'react'

const classNames = (...classes) => classes.filter(Boolean).join(' ')

const Testimonial = () => {
    const featuredTestimonial = {
  body: 'Our staffing agency has transformed the way businesses find skilled blue-collar workers, delivering reliable and efficient talent solutions.',
  author: {
    name: 'Priya Sharma',
    handle: 'priyasharma',
    imageUrl: '',
    logoUrl: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
  },
}
    const testimonials = [
  [
    [
      {
        body: 'The staffing agency provided us with highly qualified workers who exceeded our expectations and helped us meet tight deadlines.',
        author: {
          name: 'Arjun Patel',
          handle: 'arjunpatel',
          imageUrl: '',
        },
      },
      {
        body: 'Their personalized approach and quick response time made hiring blue-collar workers seamless and stress-free.',
        author: {
          name: 'Rajesh Kumar',
          handle: 'rajeshkumar',
          imageUrl: '',
        },
      },
      {
        body: 'Reliable, professional, and efficient staffing solutions that helped our business grow steadily.',
        author: {
          name: 'Vikram Singh',
          handle: 'vikramsingh',
          imageUrl: '',
        },
      },
    ],
    [
      {
        body: 'The team was attentive to our needs and provided excellent candidates for our manufacturing projects.',
        author: {
          name: 'Sunita Devi',
          handle: 'sunitadevi',
          imageUrl: '',
        },
      },
      {
        body: 'A trusted partner for staffing solutions, delivering quality workers on time and within budget.',
        author: {
          name: 'Anita Gupta',
          handle: 'anitagupta',
          imageUrl: '',
        },
      },
    ],
  ],
  [
    [
      {
        body: 'Their staffing services helped us scale our operations quickly and efficiently.',
        author: {
          name: 'Amit Kumar',
          handle: 'amitkumar',
          imageUrl: '',
        },
      },
      {
        body: 'Professional and reliable workers who consistently met our quality standards.',
        author: {
          name: 'Deepika Reddy',
          handle: 'deepikareddy',
          imageUrl: '',
        },
      },
    ],
    [
      {
        body: 'Excellent communication and support throughout the hiring process.',
        author: {
          name: 'Suresh Verma',
          handle: 'sureshverma',
          imageUrl: '',
        },
      },
      {
        body: 'Highly recommend their staffing services for any blue-collar workforce needs.',
        author: {
          name: 'Pradeep Yadav',
          handle: 'pradeepyadav',
          imageUrl: '',
        },
      },
      {
        body: 'Consistently delivered quality candidates that helped us maintain high productivity.',
        author: {
          name: 'Kavita Joshi',
          handle: 'kavitajoshi',
          imageUrl: '',
        },
      },
    ],
  ],
]
  return (
        <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32 dark:bg-gray-900">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Testimonials</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4 dark:text-gray-100">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 dark:bg-gray-800/75 dark:shadow-none dark:ring-white/10">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8 dark:text-white">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap dark:border-white/10">
              {/* <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="size-10 flex-none rounded-full bg-gray-50 dark:bg-gray-700"
              /> */}
              <div className="flex-auto">
                <div className="font-semibold text-gray-900 dark:text-white">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600 dark:text-gray-400">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none dark:hidden" />
              {/* <img
                alt=""
                src={featuredTestimonial.author.logoUrl.replace('-gray-900', '-gray-100')}
                className="h-10 w-auto flex-none not-dark:hidden"
              /> */}
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800/75 dark:shadow-none dark:ring-white/10"
                    >
                      <blockquote className="text-gray-900 dark:text-white">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        {/* <img
                          alt=""
                          src={testimonial.author.imageUrl}
                          className="size-10 rounded-full bg-gray-50 dark:bg-gray-700"
                        /> */}
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                          <div className="text-gray-600 dark:text-gray-400">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
