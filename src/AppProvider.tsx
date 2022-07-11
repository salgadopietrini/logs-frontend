import React, { useState, createContext, useMemo } from "react";

import { Provider as ReduxProvider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { IntlProvider } from "react-intl";
import { messages } from "./utils/translations";
import { Languages, ContextState, ChildrenAsProps } from "./utils/types";
import { client, ApolloProvider } from "./apollo/config";
import { store } from "./redux/store";

export const Context = createContext<ContextState>({} as ContextState);

function AppProvider({ children }: ChildrenAsProps) {
  const [lang, setLang] = useState<Languages>("en");
  const [auth, setAuth] = useState<boolean>(
    localStorage.getItem("mosanoAppToken") !== null
  );
  const handleLang = (value: Languages) => {
    setLang(value);
  };

  const value: ContextState = useMemo(
    () => ({ lang, handleLang, auth, setAuth }),
    [lang, handleLang, auth, setAuth]
  );

  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <IntlProvider locale={lang} messages={messages[lang]}>
            <Context.Provider value={value}>{children}</Context.Provider>
          </IntlProvider>
        </LocalizationProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
}

export default AppProvider;
