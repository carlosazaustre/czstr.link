import "@/styles/fonts";

import { UserProvider } from "@auth0/nextjs-auth0";

import theme, { ThemeProvider } from "@/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
