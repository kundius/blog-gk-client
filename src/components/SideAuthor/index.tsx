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
      <styles.Desc className="text-gray-700 dark:text-gray-400">Приветствую Вас на моем блоге, меня зовут Кундиус Галина. Здесь Вы найдете кулинарные рецепты, по которым я готовила для своей семьи в повседневной жизни и на торжества. Моим близким и друзьям очень нравиться мое кулинарное мастерство, может быть Вам тоже понравится. Здесь все рецепты проверенные мной, это рецепты наших бабушек, подруг и знакомых. Ещё расскажу как я похудела без диеты, лекарств и препаратов.</styles.Desc>
    </styles.Wrapper>
  )
}
