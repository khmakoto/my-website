import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { IntroSectionSlots, IntroSectionState } from './IntroSection.types';

export const renderIntroSection = (state: IntroSectionState) => {
  const { slots, slotProps } = getSlots<IntroSectionSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.profileDescription && slots.profileIntroduction && slots.textWrapper && (
        <slots.textWrapper {...slotProps.textWrapper}>
          <slots.profileIntroduction {...slotProps.profileIntroduction}>
            Hi, my name is Makoto
          </slots.profileIntroduction>
          <slots.profileDescription {...slotProps.profileDescription}>
            I'm a senior software engineer at Microsoft, currently residing in the Greater Seattle Area and helping
            advance web experiences and design systems on the Fluent UI React team.
          </slots.profileDescription>
        </slots.textWrapper>
      )}
      {slots.profilePicture && <slots.profilePicture {...slotProps.profilePicture} />}
    </slots.root>
  );
};
