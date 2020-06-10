import * as react from 'react';

/// <reference path="node_modules/@types/react/index.d.ts"/>
declare module 'react' {
  interface DOMAttributes<T> {
    css?: import('@emotion/core').InterpolationWithTheme<import('./src/theme').Theme>;
  }
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }

  namespace JSX {
    /**
     * Do we need to modify `LibraryManagedAttributes` too,
     * to make `className` props optional when `css` props is specified?
     */

    interface IntrinsicAttributes {
      css?: import('@emotion/core').InterpolationWithTheme<import('./src/theme').Theme>;
    }
  }
}
