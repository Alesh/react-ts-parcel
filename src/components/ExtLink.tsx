import React from 'react';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  href: string;
  className?: string;
}>;
/// External link
export const ExtLink: FC<Props> = ({ href, className = '', children }) => {
  return (
    <a className={`underline ${className}`} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
