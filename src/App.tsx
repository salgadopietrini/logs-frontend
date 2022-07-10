import React, { useState, createContext, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { IntlProvider } from "react-intl";
import { messages } from "./utils/translations";
import { Languages } from "./utils/types";
import { client, ApolloProvider } from "./apollo/config";
import { store } from "./redux/store";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import NotFound from "./views/NotFound";
import Layout from "./components/Layout/Layout";

interface ContextState {
  lang: Languages;
  handleLang: (value: Languages) => void;
}

export const Context = createContext<ContextState>({} as ContextState);

function App() {
  const [lang, setLang] = useState<Languages>("en");
  const handleLang = (value: Languages) => {
    setLang(value);
  };

  const value: ContextState = useMemo(
    () => ({ lang, handleLang }),
    [lang, handleLang]
  );

  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <IntlProvider locale={lang} messages={messages[lang]}>
            <Context.Provider value={value}>
              <Layout>
                <Router>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Router>
              </Layout>
            </Context.Provider>
          </IntlProvider>
        </LocalizationProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
}

export default App;
