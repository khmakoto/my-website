import * as React from 'react';
import { renderFooter } from './renderFooter';
import { useFooter } from './useFooter';
import { useFooterStyles } from './useFooterStyles';
import type { FooterProps } from './Footer.types';

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const state = useFooter(props, ref);

  useFooterStyles(state);

  return renderFooter(state);
});

Footer.displayName = 'Footer';
