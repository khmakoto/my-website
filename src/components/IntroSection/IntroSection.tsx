import * as React from 'react';
import { renderIntroSection } from './renderIntroSection';
import { useIntroSection } from './useIntroSection';
import { useIntroSectionStyles } from './useIntroSectionStyles';
import type { IntroSectionProps } from './IntroSection.types';

export const IntroSection = React.forwardRef<HTMLDivElement, IntroSectionProps>((props, ref) => {
  const state = useIntroSection(props, ref);

  useIntroSectionStyles(state);

  return renderIntroSection(state);
});

IntroSection.displayName = 'IntroSection';
