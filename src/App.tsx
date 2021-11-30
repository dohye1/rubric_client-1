import React, { useMemo } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import ko from 'locales/ko.json';
import en from 'locales/en.json';
import ja from 'locales/ja.json';

function App() {
  const intlSet = ['en', 'ko', 'ja'];
  const getLocale = () => {
    let locale = localStorage.getItem('locale') ?? 'en';
    if (!intlSet.includes(locale)) {
      localStorage.setItem('locale', 'en');
      locale = 'en';
    }
    return locale;
  };

  const messages = useMemo(() => {
    return { en, ko, ja }[getLocale()];
  }, []);

  return (
    <IntlProvider locale={getLocale()} messages={messages}>
      <div className="App">
        <FormattedMessage id="App.Hello">
          {(text) => {
            console.log(text);
            return <h1>{text}</h1>;
          }}
        </FormattedMessage>
      </div>
    </IntlProvider>
  );
}

export default App;
