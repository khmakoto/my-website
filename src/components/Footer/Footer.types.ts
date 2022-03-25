import { Link } from '@fluentui/react-components';
import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type FooterSlots = {
  root: NonNullable<Slot<'div'>>;

  githubLink?: Slot<typeof Link>;

  linkedInLink?: Slot<typeof Link>;
};

export type FooterCommons = {};

export type FooterProps = ComponentProps<FooterSlots> & Partial<FooterCommons> & {};

export type FooterState = ComponentState<FooterSlots> & FooterCommons & {};
