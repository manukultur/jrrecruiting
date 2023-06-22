import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/av_salad.jpg'
import image2 from '@/images/photos/butcher_jr.png'
import image3 from '@/images/photos/fish.jpg'
import image4 from '@/images/photos/tartar.jpg'
import image5 from '@/images/photos/bread.jpg'
import babLogo from '@/images/logos/bab.jpg'
import fcLogo from '@/images/logos/fc.png'




function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

let articles = [
  {
    header: 'Eaten up with Frenchness',
    title: 'Dilligence',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',   
  },
  {
    header: 'Eaten up with Frenchness',
    title: 'Honesty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',   
  },
  {
    header: 'Eaten up with Frenchness',
    title: 'Fairness',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',   
  },

]

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" decorate>
        {article.header}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


function Positions() {
  let positions = [
    {
      position: 'Cook',
      place: 'Bar à Boeuf',
      start: 'July',
     
    },
    {
      position: 'Dishwasher',
      place: 'Bar à Boeuf',
      start: 'Now',
      end: '',
    },
    {
      position: 'Barista',
      place: 'French Crust Café',
      start: 'July',
    },
    {
      position: 'Cook',
      place: 'French Crust Café',
      start: 'Now',
    },
    {
      position: 'Sandwich Line',
      place: 'French Crust Café',
      start: 'July',
    },
  ]

  return (
    <div className="p-6 border rounded-2xl border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="flex-none w-6 h-6" />
        <span className="ml-3">Positions</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {positions.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            </div>
            <dl className="flex flex-wrap flex-auto gap-x-2">
              <dt className="sr-only">Position</dt>
              <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.position}
              </dd>
              <dt className="sr-only">Restaurant</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.place}
              </dd>
              <dt className="sr-only">Starting</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="w-full mt-6 group">
        Download application
        <ArrowDownIcon className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Spencer Sharp - Software designer, founder, and amateur astronaut
        </title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Come work at <span className='line-through'>one</span> two of the best restaurants in town.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            We&apos;re expanding the team and all positions are welcome. Are you driven by perfection? Do you love to feed people? Are you intrinsically motivated to perform every day? Do you want to spend your time making amazing French food? Then join us. Give us a call or shoot us a text or email.
          </p>
          
          <div className="flex gap-6 mt-6">
            
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
          <div className='flex gap-6 mt-6'>
            <div className='relative h-40 aspect-square'>
          <Image
              src={babLogo}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-cover w-full h-full"
            />
            </div>
            <div className='relative h-40 aspect-square'>
          <Image
              src={fcLogo}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-contain w-full h-full"
            />
            </div>
          </div>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Positions />
          </div>
        </div>
      </Container>
    </>
  )
}

