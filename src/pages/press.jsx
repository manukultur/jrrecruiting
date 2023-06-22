import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ArticleSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Article({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

let articles = [
  {
    title: 'BEST RESTAURANTS NO. 3: LE BAR A BOEUF’S FRENCH CUISINE IS ON ANOTHER LEVEL',
    url: 'https://www.cincinnatimagazine.com/article/best-restaurants-no-3-le-bar-a-boeuf-french-cuisine-is-on-another-level/',
    excerpt: 'Jean-Robert de Cavel’s neo-bistro provides approachable yet sophisticated cuisine with a beautiful view. I don’t know if there is a better restaurant reinvention story in Cincinnati than Jean-Robert de Cavel’s wonderful Le Bar a Boeuf. The restaurant—perched high above the Ohio River in East Walnut Hills’s Edgecliff Building—was mainly a gourmet burger joint when it first opened in 2015. It has since been refined into a full-on French bistro, and as such, it is the best place in town to sample de Cavel’s approachable-but-sophisticated cuisine.',
    author: 'Brandon Wuske',
    date: 'March 3, 2023',
    publication: "Cincinnati Magazine"
  },

]

export default function Uses() {
  return (
    <>
      <Head>
        <title>Jean-Robert Restaurant Group - Press</title>
        <meta
          name="description"
          content="Some links to articles about our restaurants."
        />
      </Head>
      <SimpleLayout
        title="Press about the Jean-Robert Restaurant Group"
        intro="Over the years, a lot has been said about our restaurants! Here are a few recent articles about Jean-Robert de Cavel and our restaurants Le Bar à Boeuf and French Crust Café and Bistro."
      >
        <div className="space-y-20">
          <ArticleSection title="Magazines">
            {articles.map((article, articleIdx) => (
            <a key={articleIdx} href={article.url} target='_blank' rel="noreferrer">
            <Article  title={article.title}>
                <p>{article.excerpt}</p>
                <div className='pt-4'>
                  <strong>{article.author}</strong>, {article.publication}<br/>{article.date}
                  </div>
              </Article>
              </a>
            ))}
          </ArticleSection>
          
        </div>
      </SimpleLayout>
    </>
  )
}
