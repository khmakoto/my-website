import * as React from 'react';
import { WeatherMoonRegular, WeatherSunnyRegular } from '@fluentui/react-icons';
import { getSlots } from '@fluentui/react-utilities';
import { matchesPhoneMedia } from '../../utils/index';
import type { NavSlots, NavState } from './Nav.types';

export const renderNav = (state: NavState) => {
  const { slots, slotProps } = getSlots<NavSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.switchWrapper && slots.switch && (
        <slots.switchWrapper {...slotProps.switchWrapper}>
          <WeatherSunnyRegular fontSize={24} />
          <slots.switch {...slotProps.switch} />
          <WeatherMoonRegular fontSize={24} />
        </slots.switchWrapper>
      )}
      {slots.homeLink && (
        <slots.homeLink {...slotProps.homeLink}>
          {matchesPhoneMedia() ? 'Makoto Morimoto' : 'Humberto Makoto Morimoto Burgos'}
        </slots.homeLink>
      )}
    </slots.root>
  );
};
