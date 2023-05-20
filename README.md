[![Known Vulnerabilities](https://snyk.io/test/github/Evanion/compose/badge.svg)](https://snyk.io/test/github/Evanion/compose)
![npm (scoped)](https://img.shields.io/npm/v/@evanion/compose)

# compose

A React component that allows you to cleanup your providers.

Raise your hand if your `App.tsx` looks like this

```tsx
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <TranslationProvider locale={locale} messages={messages}>
            <StateProvider state={stateStore}>
              <CoffeeProvider>
                <SanityProvider>
                  <Routes />
                </SanityProvider>
              </CoffeeProvider>
            </StateProvider>
          </TranslationProvider>
        </ThemeProvider>
      </CacheProvider>
    </ErrorBoundary>
  );
};
```

This package let's you go to this:

```tsx
const providers = [
  ErrorBoundary,
  [CacheProvider, { value: emotionCache }],
  [ThemeProvider, { theme }],
  [TranslationProvider, { locale, messages }],
  [StateProvider, { state: stateStore }],
  CoffeeProvider,
  SanityProvider,
];

const App: React.FC = () => {
  return (
    <ComposeProvider components={providers}>
      <Routes />
    </ComposeProvider>
  );
};
```
