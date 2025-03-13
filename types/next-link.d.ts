declare module 'next/link' {
  import { ComponentType, ReactNode } from 'react';

  interface LinkProps {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
  }

  const Link: ComponentType<LinkProps>;
  export default Link;
} 