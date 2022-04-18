import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import type { IntroSectionState } from './IntroSection.types';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    backgroundColor: tokens.colorNeutralBackground6,
    display: 'flex',
    ...shorthands.gap('25px'),
    minHeight: 'calc(100vh - 120px)',
    justifyContent: 'center',
    transitionDuration: '200ms',
    transitionTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)',
    transitionProperty: 'background, border, color',

    '@media only screen and (max-width: 820px)': {
      flexDirection: 'column-reverse',
    },
  },

  profileDescription: {
    '@media only screen and (max-width: 820px)': {
      textAlign: 'center',
    },
  },

  profileIntroduction: {
    '@media only screen and (max-width: 820px)': {
      textAlign: 'center',
    },
  },

  profilePicture: {
    height: '350px',
    width: '350px',

    '@media only screen and (max-width: 425px)': {
      height: '250px',
      width: '250px',
    },
  },

  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('5px'),
    justifyContent: 'center',
    width: '450px',

    '@media only screen and (max-width: 425px)': {
      ...shorthands.padding(0, '10px'),
      width: 'auto',
    },
  },
});

export const useIntroSectionStyles = (state: IntroSectionState): IntroSectionState => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  if (state.profileDescription) {
    state.profileDescription.className = mergeClasses(styles.profileDescription, state.profileDescription.className);
  }

  if (state.profileIntroduction) {
    state.profileIntroduction.className = mergeClasses(styles.profileIntroduction, state.profileIntroduction.className);
  }

  if (state.profilePicture) {
    state.profilePicture.className = mergeClasses(styles.profilePicture, state.profilePicture.className);
  }

  if (state.textWrapper) {
    state.textWrapper.className = mergeClasses(styles.textWrapper, state.textWrapper.className);
  }

  return state;
};
