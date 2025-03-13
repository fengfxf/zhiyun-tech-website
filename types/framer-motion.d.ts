declare module 'framer-motion' {
  import { ComponentType, ReactNode } from 'react';

  interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    className?: string;
    style?: any;
    children?: ReactNode;
    [key: string]: any;
  }

  export const motion: {
    div: ComponentType<MotionProps>;
    span: ComponentType<MotionProps>;
    button: ComponentType<MotionProps>;
    a: ComponentType<MotionProps>;
    ul: ComponentType<MotionProps>;
    li: ComponentType<MotionProps>;
    [key: string]: ComponentType<MotionProps>;
  };
} 