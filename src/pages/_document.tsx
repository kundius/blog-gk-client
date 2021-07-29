import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import {
  VARIABLES,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP
} from '@components/ThemeContext/constants'

function setColorsByTheme () {
  const variables = '🌈';
  const colorModeKey = '🔑';
  const colorModeCssProp = '⚡️';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  if (typeof persistedPreference === 'string') {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);
  root.classList.add(colorMode);

  Object.entries(variables).forEach(([name, varByTheme]) => {
    const cssVarName = `--${name}`;

    root.style.setProperty(cssVarName, varByTheme[colorMode]);
  });
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(VARIABLES))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
}

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head />
        <body>
          <MagicScriptTag />
          <script dangerouslySetInnerHTML={{ __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(35935260, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true,
                  trackHash:true
            });
          ` }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
