import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { DocumentContext, DocumentInitialProps } from 'next/dist/next-server/lib/utils'
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
  public static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html>
        <Head />
        <body>
          <MagicScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
