import * as React from 'react';
import { makeStyles, tokens, webDarkTheme, webLightTheme, FluentProvider } from '@fluentui/react-components';
import { useBoolean } from '@fluentui/react-utilities';
import { IntroSection, Nav } from './components';

const useAppStyles = makeStyles({
  app: {
    backgroundColor: tokens.colorNeutralBackground1,
    height: '100%',
  },
});

const App = () => {
  const [isDarkTheme, { toggle: toggleTheme }] = useBoolean(false);

  const styles = useAppStyles();

  return (
    <FluentProvider theme={isDarkTheme ? webDarkTheme : webLightTheme} className={styles.app}>
      <Nav toggleTheme={toggleTheme} />
      <IntroSection />
    </FluentProvider>
  );
};

export default App;
