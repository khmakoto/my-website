import * as React from 'react';
import { Link } from '@fluentui/react-components';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import type { FooterProps, FooterState } from './Footer.types';

export const useFooter = (props: FooterProps, ref: React.Ref<HTMLDivElement>): FooterState => {
  const root = getNativeElementProps('div', { ref, ...props });

  const githubLink = resolveShorthand(props.githubLink, {
    defaultProps: {
      appearance: 'subtle',
      children: <AiFillGithub />,
      href: 'https://github.com/khmakoto',
      target: '_blank',
    },
    required: true,
  });

  const linkedInLink = resolveShorthand(props.linkedInLink, {
    defaultProps: {
      appearance: 'subtle',
      children: <AiFillLinkedin />,
      href: 'https://www.linkedin.com/in/humberto-morimoto/en',
      target: '_blank',
    },
    required: true,
  });

  return {
    components: {
      root: 'div',
      githubLink: Link,
      linkedInLink: Link,
    },

    root,
    githubLink,
    linkedInLink,
  };
};
