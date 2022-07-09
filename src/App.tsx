import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { client, ApolloProvider } from "./apollo/config";
import { store } from "./redux/store";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import NotFound from "./views/NotFound";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Layout>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </Layout>
        </LocalizationProvider>
      </ApolloProvider>
    </ReduxProvider>
  );
}

export default App;
