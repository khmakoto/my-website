import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import type { IntroSectionState } from './IntroSection.types';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    backgroundColor: tokens.colorNeutralBackground6,
    display: 'flex',
    ...shorthands.gap('25px'),
    minHeight: 'calc(100vh - 60px)',
    justifyContent: 'center',
  },

  profilePicture: {
    height: '350px',
    width: '350px',
  },

  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('5px'),
    justifyContent: 'center',
    width: '450px',
  },
});

export const useIntroSectionStyles = (state: IntroSectionState): IntroSectionState => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  if (state.profilePicture) {
    state.profilePicture.className = mergeClasses(styles.profilePicture, state.profilePicture.className);
  }

  if (state.textWrapper) {
    state.textWrapper.className = mergeClasses(styles.textWrapper, state.textWrapper.className);
  }

  return state;
};
