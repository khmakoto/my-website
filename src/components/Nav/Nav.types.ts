import React from 'react';
import { Link } from '@fluentui/react-components';
import { Switch } from '@fluentui/react-components/unstable';
import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type NavSlots = {
  root: NonNullable<Slot<'div'>>;

  homeLink?: Slot<typeof Link>;

  switch?: Slot<typeof Switch & { children: React.ReactNode }>;

  switchWrapper?: Slot<'div'>;
};

export type NavCommons = {};

export type NavProps = ComponentProps<NavSlots> &
  Partial<NavCommons> & {
    toggleTheme: () => void;
  };

export type NavState = ComponentState<NavSlots> & NavCommons & {};
