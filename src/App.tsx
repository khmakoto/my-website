import * as React from 'react';
import { makeStyles, tokens, webDarkTheme, webLightTheme, FluentProvider } from '@fluentui/react-components';
import { useBoolean } from '@fluentui/react-utilities';
import { IntroSection, Footer, Nav } from './components';

const useAppStyles = makeStyles({
  app: {
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: '100%',
    transitionDuration: '200ms',
    transitionTimingFunction: 'cubic-bezier(0.33, 0, 0.67, 1)',
    transitionProperty: 'background, border, color',
  },
});

const App = () => {
  const [isDarkTheme, { toggle: toggleTheme }] = useBoolean(false);

  const styles = useAppStyles();

  return (
    <FluentProvider theme={isDarkTheme ? webDarkTheme : webLightTheme} className={styles.app}>
      <Nav toggleTheme={toggleTheme} />
      <IntroSection />
      <Footer />
    </FluentProvider>
  );
};

export default App;
