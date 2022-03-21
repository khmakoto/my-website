import * as React from 'react';
import { Link } from '@fluentui/react-components';
import { Switch } from '@fluentui/react-components/unstable';
import { getNativeElementProps, resolveShorthand, useMergedEventCallbacks } from '@fluentui/react-utilities';
import type { NavProps, NavState } from './Nav.types';

export const useNav = (props: NavProps, ref: React.Ref<HTMLDivElement>): NavState => {
  const { homeLink, switch: switchProp, switchWrapper, toggleTheme } = props;

  const rootSlot = getNativeElementProps('div', { ref, ...props });

  const homeLinkSlot = resolveShorthand(homeLink, {
    defaultProps: { appearance: 'subtle' },
    required: true,
  });

  const switchSlot = resolveShorthand(switchProp, { required: true });
  const onSwitchChange = useMergedEventCallbacks(switchSlot?.onChange, _ => toggleTheme());
  if (switchSlot) {
    switchSlot.onChange = onSwitchChange;
  }

  const switchWrapperSlot = resolveShorthand(switchWrapper, { required: true });

  return {
    components: {
      root: 'div',
      homeLink: Link,
      switch: Switch,
      switchWrapper: 'div',
    },

    root: rootSlot,
    homeLink: homeLinkSlot,
    switch: switchSlot,
    switchWrapper: switchWrapperSlot,
  };
};
