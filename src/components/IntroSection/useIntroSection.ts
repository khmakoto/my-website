import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { IntroSectionProps, IntroSectionState } from './IntroSection.types';

export const useIntroSection = (props: IntroSectionProps, ref: React.Ref<HTMLDivElement>): IntroSectionState => {
  const rootSlot = getNativeElementProps('div', { ref, ...props });

  return {
    components: {
      root: 'div',
    },

    root: rootSlot,
  };
};
