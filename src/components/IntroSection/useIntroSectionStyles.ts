import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import type { IntroSectionState } from './IntroSection.types';

const useStyles = makeStyles({
  root: {},
});

export const useIntroSectionStyles = (state: IntroSectionState): IntroSectionState => {
  const styles = useStyles();

  state.root.className = mergeClasses(styles.root, state.root.className);

  return state;
};
