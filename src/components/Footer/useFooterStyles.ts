import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import type { FooterState } from './Footer.types';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    backgroundColor: 'inherit',
    boxShadow: `0 0 8px ${tokens.colorBrandShadowAmbient}, 0 -14px 28px ${tokens.colorNeutralStroke1}`,
    display: 'flex',
    ...shorthands.gap('15px'),
    justifyContent: 'center',
    minHeight: '60px',
    ...shorthands.padding(0, '10px'),
    position: 'sticky',
    bottom: 0,
  },

  footerLink: {
    borderBottomStyle: 'none',
    color: tokens.colorNeutralForeground4,
    fontSize: '24px',
  },
});

export const useFooterStyles = (state: FooterState): FooterState => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  if (state.githubLink) {
    state.githubLink.className = mergeClasses(styles.footerLink, state.githubLink.className);
  }
  if (state.linkedInLink) {
    state.linkedInLink.className = mergeClasses(styles.footerLink, state.linkedInLink.className);
  }

  return state;
};
