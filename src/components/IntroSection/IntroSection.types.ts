import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type IntroSectionSlots = {
  root: NonNullable<Slot<'div'>>;
};

export type IntroSectionCommons = {};

export type IntroSectionProps = ComponentProps<IntroSectionSlots> & Partial<IntroSectionCommons> & {};

export type IntroSectionState = ComponentState<IntroSectionSlots> & IntroSectionCommons & {};
