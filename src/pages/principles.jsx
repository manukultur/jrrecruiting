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
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Principles we live by</title>
        <meta
          name="description"
          content="Principles we live by at Jean-Robert Restaurant Group"
        />
      </Head>
      <SimpleLayout
        title="Principles we live by."
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      >
        <div className="space-y-20">
          <SpeakingSection title="Lorem ipsum">
            <Appearance
              href="#"
              title="Every meal is an opportunity"
              description="
                We believe that every meal is an opportunity to create something
                special and unique, crafted with the highest quality ingredients
                and presented with care and attention to detail.

"
            />
            <Appearance
              href="#"
              title="Good food, good company"
              description="              
              We are committed to creating a warm and welcoming atmosphere,
              where our guests feel at home and surrounded by the warmth and
              comfort of good food and good company.
            "
            />
          </SpeakingSection>
          <SpeakingSection title="Lorem ipsum">
            <Appearance
              href="#"
              title="Forever learning to delight."
              description="
              We are forever learning and thriving committing ourselves to
              never giving up on this belief, and to continue to develop
              experiences that bring joy, pleasure, and delight to our guests.
            "
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
