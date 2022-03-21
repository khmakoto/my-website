import * as React from 'react';
import { renderNav } from './renderNav';
import { useNav } from './useNav';
import { useNavStyles } from './useNavStyles';
import type { NavProps } from './Nav.types';

export const Nav = React.forwardRef<HTMLDivElement, NavProps>((props, ref) => {
  const state = useNav(props, ref);

  useNavStyles(state);

  return renderNav(state);
});

Nav.displayName = 'Nav';
