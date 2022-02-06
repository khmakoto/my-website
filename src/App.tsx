import * as React from 'react';
import { tokens, webDarkTheme, webLightTheme, Button, FluentProvider } from '@fluentui/react-components';
import { useBoolean } from '@fluentui/react-utilities';
import { makeStyles } from '@griffel/react';
import './App.css';

const useAppStyles = makeStyles({
  app: {
    alignItems: 'center',
    backgroundColor: tokens.colorNeutralBackground1,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
});

function App() {
  const [isDarkTheme, { toggle: toggleDarkTheme }] = useBoolean(false);

  const styles = useAppStyles();

  return (
    <FluentProvider theme={isDarkTheme ? webDarkTheme : webLightTheme} className={styles.app}>
      <Button onClick={toggleDarkTheme}>Switch to {isDarkTheme ? 'light theme' : 'dark theme'}</Button>
    </FluentProvider>
  );
}

export default App;
