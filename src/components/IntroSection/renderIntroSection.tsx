import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { IntroSectionSlots, IntroSectionState } from './IntroSection.types';

export const renderIntroSection = (state: IntroSectionState) => {
  const { slots, slotProps } = getSlots<IntroSectionSlots>(state);

  return <slots.root {...slotProps.root}></slots.root>;
};
