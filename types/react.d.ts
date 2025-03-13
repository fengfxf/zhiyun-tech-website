import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'react' {
  export * from 'react';
  export const useState: any;
  export const useEffect: any;
  export const useRef: any;
  export const useCallback: any;
  export const useMemo: any;
  export const useContext: any;
  export const useReducer: any;
  export const createContext: any;
  export const memo: any;
  export const forwardRef: any;
  export const Fragment: any;
  export const Suspense: any;
  export const lazy: any;
  export const createElement: any;
  export const cloneElement: any;
  export const isValidElement: any;
  export const Children: any;
  export const Component: any;
  export const PureComponent: any;
} 