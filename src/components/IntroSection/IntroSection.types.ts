import * as React from 'react';
import { Image, Text } from '@fluentui/react-components';
import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type IntroSectionSlots = {
  root: NonNullable<Slot<'div'>>;

  profileDescription?: Slot<typeof Text>;

  profileIntroduction?: Slot<typeof Text>;

  profilePicture?: Slot<typeof Image & { children: React.ReactNode }>;

  textWrapper?: Slot<'div'>;
};

export type IntroSectionCommons = {};

export type IntroSectionProps = ComponentProps<IntroSectionSlots> & Partial<IntroSectionCommons> & {};

export type IntroSectionState = ComponentState<IntroSectionSlots> & IntroSectionCommons & {};
