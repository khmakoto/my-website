import * as React from 'react';
import { Image, Text } from '@fluentui/react-components';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { IntroSectionProps, IntroSectionState } from './IntroSection.types';

export const useIntroSection = (props: IntroSectionProps, ref: React.Ref<HTMLDivElement>): IntroSectionState => {
  const root = getNativeElementProps('div', { ref, ...props });

  const profileDescription = resolveShorthand(props.profileDescription, {
    defaultProps: {
      size: 500,
    },
    required: true,
  });

  const profileIntroduction = resolveShorthand(props.profileDescription, {
    defaultProps: {
      size: 700,
      weight: 'semibold',
    },
    required: true,
  });

  const profilePicture = resolveShorthand(props.profilePicture, {
    defaultProps: {
      alt: "Makoto's profile picture",
      fit: 'cover',
      shape: 'circular',
      src: require('../../assets/Profile picture.jpg'),
    },
    required: true,
  });

  const textWrapper = resolveShorthand(props.textWrapper, { required: true });

  return {
    components: {
      root: 'div',
      profileDescription: Text,
      profileIntroduction: Text,
      profilePicture: Image,
      textWrapper: 'div',
    },

    root,
    profileDescription,
    profileIntroduction,
    profilePicture,
    textWrapper,
  };
};
