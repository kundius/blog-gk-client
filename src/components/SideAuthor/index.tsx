import React from 'react'

import * as styles from './styles'

export function SideAuthor () {
  return (
    <styles.Wrapper>
      <styles.Image>
        <img src="/images/author.jpg" alt="" />
      </styles.Image>
      <styles.Name>Галина Кундиус</styles.Name>
      <styles.Sub>автор блога</styles.Sub>
      <styles.Desc className="text-gray-700 dark:text-gray-400">
        Приветствую Вас на&nbsp;моем блоге.<br />
        Здесь Вы найдете кулинарные рецепты, по&nbsp;которым я готовила для&nbsp;своей семьи в&nbsp;повседневной жизни и&nbsp;на&nbsp;торжества. Моим близким и&nbsp;друзьям очень нравится мое кулинарное мастерство, может быть Вам тоже понравится. Здесь все рецепты проверенные мной, это рецепты наших бабушек, подруг и&nbsp;знакомых. Ещё&nbsp;расскажу как я&nbsp;похудела без диеты, лекарств и&nbsp;препаратов.
      </styles.Desc>
    </styles.Wrapper>
  )
}
