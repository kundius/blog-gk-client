import React from 'react'

import * as styles from './styles'

export interface IngredientsProps {
  items: {
    name: string
    value: string
  }[]
}

export function Ingredients ({
  items
}: IngredientsProps) {
  return (
    <styles.Wrapepr>
      <div className="text-lg mb-4 uppercase tracking-widest">Ингредиенты</div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div className="flex items-end leading-none justify-between gap-2" key={i}>
            <div className="">{item.name}</div>
            {item.value && (
              <>
                <div className="flex-grow border-b border-dotted"></div>
                <div className="">{item.value}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </styles.Wrapepr>
  )
}
