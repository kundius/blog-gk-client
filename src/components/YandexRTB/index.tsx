import React, { useRef, useEffect } from 'react'

export interface YandexRTBProps {
  id: string
  horizontalAlign?: boolean
}

export const YandexRTB = ({
  id,
  horizontalAlign = true
}: YandexRTBProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    ref.current.innerHTML = ''

    const elId = Math.random().toString(36).substring(7)

    const yaDiv = document.createElement('div')
    yaDiv.setAttribute('id', `yandex_rtb_${elId}`)
    ref.current.appendChild(yaDiv)
  
    const yaScript = document.createElement('script')
    yaScript.setAttribute('type', 'text/javascript')
    yaScript.innerHTML = `
      (function(w, d, n, s, t) {
        w[n] = w[n] || [];
        w[n].push(function() {
            Ya.Context.AdvManager.render({
                blockId: "${id}",
                renderTo: "yandex_rtb_${elId}",
                horizontalAlign: ${horizontalAlign ? 'true' : 'false'},
                async: true
            });
        });
        t = d.getElementsByTagName("script")[0];
        s = d.createElement("script");
        s.type = "text/javascript";
        s.src = "//an.yandex.ru/system/context.js";
        s.async = true;
        t.parentNode.insertBefore(s, t);
      })(this, this.document, "yandexContextAsyncCallbacks");
    `
  
    ref.current.appendChild(yaScript)
  })
  return (
    <div ref={ref} />
  )
}
