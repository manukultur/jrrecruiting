import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Our manifesto at Jean-Robert Restaurant Group</title>
        <meta
          name="description"
          content="Our manifesto at Jean-Robert Restaurant Group"
        />
      </Head>
      <SimpleLayout
        title="Our manifesto at Jean-Robert Restaurant Group"
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      >
        <div className="space-y-20">
          <SpeakingSection title="Lorem ipsum">
            <Appearance
              href="#"
              title="Lorem ipsum dolor sit amet"
              description="
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.               "
            />
            <Appearance
              href="#"
              title="Lorem ipsum dolor sit amet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />
          </SpeakingSection>
          <SpeakingSection title="Lorem ipsum">
            <Appearance
              href="#"
              title="Lorem ipsum dolor sit amet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. taria."
            />
            <Appearance
              href="#"
              title="Lorem ipsum dolor sit amet"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            />
            <Appearance
              href="#"
              title="Lorem ipsum dolor sit amet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ."
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
