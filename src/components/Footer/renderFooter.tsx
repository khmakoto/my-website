import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { FooterSlots, FooterState } from './Footer.types';

export const renderFooter = (state: FooterState) => {
  const { slots, slotProps } = getSlots<FooterSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.githubLink && <slots.githubLink {...slotProps.githubLink} />}
      {slots.linkedInLink && <slots.linkedInLink {...slotProps.linkedInLink} />}
    </slots.root>
  );
};
