import React, { useContext } from 'react'
import useSWR from 'swr'
import { Helmet } from 'react-helmet'
import { BsArrowRightShort } from 'react-icons/bs'
import { DateTime } from 'luxon'
import Link from 'next/link'

import { Image } from '@components/Image'
import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'
import { PreloadContext } from '@components/PreloadContext'
import { ArticleCardLatest } from '@components/ArticleCardLatest'
import { WideLayout } from '@components/WideLayout'

import * as api from './api'

const { publicRuntimeConfig } = getRuntimeConfig()

export function HomePage () {
  const preload = useContext(PreloadContext)

  const [keyFirstSection, fetcherFirstSection] = api.getArticles({
    aliasIn: ['baking', 'cookies', 'cakes'],
    limit: 6
  })

  const { data: resultFirstSection } = useSWR<api.GetArticlesData>(keyFirstSection, fetcherFirstSection, {
    initialData: preload[keyFirstSection]
  })

  const [keySecondSection, fetcherSecondSection] = api.getArticles({
    aliasIn: ['entrees', 'main-dishes'],
    limit: 6
  })

  const { data: resultSecondSection } = useSWR<api.GetArticlesData>(keySecondSection, fetcherSecondSection, {
    initialData: preload[keySecondSection]
  })

  const [keyThirdSection, fetcherThirdSection] = api.getArticles({
    aliasNotIn: ['baking', 'cookies', 'cakes', 'entrees', 'main-dishes'],
    limit: 6
  })

  const { data: resultThirdSection } = useSWR<api.GetArticlesData>(keyThirdSection, fetcherThirdSection, {
    initialData: preload[keyThirdSection]
  })

  return (
    <WideLayout>
      <Helmet>
        <title>Кулинарные рецепты Галины Кундиус</title>
        <meta name="description" content="Блог с рецептами кулинарных блюд для домашнего приготовления и обычные истории из жизни. На сайте можно найти интересные рецепты; салатов, первых, вторых блюд и выпечки." />
        <meta name="keywords" content="блог кулинария рецепты кулинарные первые вторые блюда домашняя выпечка храмы церкви истории статьи путешествия по святым местам Галина Кундиус" />
      </Helmet>
      <div className="space-y-24">
        <section className="transition duration-300 ease-out space-y-6 bg-gray-100 dark:bg-gray-800 p-8 md:p-12 rounded-3xl">
          <div className="items-center grid grid-cols-5 gap-8 md:gap-12">
            <div className="col-span-5 lg:col-span-3">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 transition duration-300 ease-out">
                Галина Кундиус
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Приветствую Вас на&nbsp;моем блоге. Здесь Вы найдете кулинарные рецепты, по&nbsp;которым я готовила для&nbsp;своей семьи в&nbsp;повседневной жизни и&nbsp;на&nbsp;торжества. Моим близким и&nbsp;друзьям очень нравится мое кулинарное мастерство, может быть Вам тоже понравится. Здесь все рецепты проверенные мной, это рецепты наших бабушек, подруг и&nbsp;знакомых. Ещё&nbsp;расскажу как я&nbsp;похудела без диеты, лекарств и&nbsp;препаратов.
              </p>

              <div className="flex items-center mt-6 -mx-2">
                <a className="mx-2" href="#" aria-label="Twitter">
                  <svg className="transition duration-300 ease-out w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"/>
                  </svg>
                </a>

                <a className="mx-2" href="#" aria-label="Facebook">
                  <svg className="transition duration-300 ease-out w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"/>
                  </svg>
                </a>

                <a className="mx-2" href="#" aria-label="Linkden">
                  <svg className="transition duration-300 ease-out w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/>
                  </svg>
                </a>

                <a className="mx-2" href="#" aria-label="Github">
                  <svg className="transition duration-300 ease-out w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="col-span-5 lg:col-span-2 order-first md:order-last">
              <div className="rounded-md shadow overflow-hidden">
                <Image
                  src="/images/about.jpeg"
                  alt=""
                  width={640}
                  height={480}
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </section>

        {renderLatestCooking({
          title: 'Торты, печенье и прочая выпечка',
          data: resultFirstSection?.data
        })}

        {renderLatestCooking({
          title: 'Первые и вторые блюда',
          data: resultSecondSection?.data
        })}

        {renderLatestCooking({
          title: 'Прочая кулинария',
          data: resultThirdSection?.data
        })}
      </div>
    </WideLayout>
  )

  function renderLatestCooking ({
    data,
    title
  }) {
    return (
      <section>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-2">
          <h2 className="text-2xl md:text-3xl">{title}</h2>
          <Link href="/cooking" passHref>
            <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
              смотреть все
              <span className="ml-1 text-xl">
                <BsArrowRightShort />
              </span>
            </a>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map(article => (
            <ArticleCardLatest
              key={article.alias}
              name={article.name}
              portionCount={article.portion_count}
              cookingTime={article.cooking_time}
              commentsCount={article.comments_count || 0}
              hitsCount={article.hits_count || 0}
              excerpt={article.excerpt}
              createdAt={DateTime.fromISO(article.date_created).setLocale('ru').toFormat('DDD')}
              thumbnail={
                article.thumbnail
                  ? {
                      name: article.thumbnail?.title,
                      blurHash: article.thumbnail?.blurhash,
                      url: `${publicRuntimeConfig.API_URL}/assets/${article.thumbnail?.filename_disk}`
                    }
                  : undefined
              }
              url={`/${article.category.section.alias}/${article.category.alias}/${article.alias}`}
              category={{
                name: article.category.name,
                url: `/${article.category.section.alias}/${article.category.alias}`
              }}
            />
          ))}
        </div>
      </section>
    )
  }
}
