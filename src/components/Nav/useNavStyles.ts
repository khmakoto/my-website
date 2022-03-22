import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import type { NavState } from './Nav.types';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    backgroundColor: 'inherit',
    boxShadow: `0 0 8px ${tokens.colorBrandShadowAmbient}, 0 14px 28px ${tokens.colorNeutralStroke1}`,
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '60px',
    ...shorthands.padding(0, '10px'),
    position: 'sticky',
    top: 0,
  },

  homeLink: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
  },

  switchWrapper: {
    alignItems: 'center',
    display: 'inline-flex',
  },
});

export const useNavStyles = (state: NavState): NavState => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  if (state.homeLink) {
    state.homeLink.className = mergeClasses(styles.homeLink, state.homeLink.className);
  }

  if (state.switchWrapper) {
    state.switchWrapper.className = mergeClasses(styles.switchWrapper, state.switchWrapper.className);
  }

  return state;
};
