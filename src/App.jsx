import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FooterContainer from "./components/FooterContainer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
import AccountAndStatus from "./components/AccountAndStatus";
import AccountSetting from "./components/AccountSetting";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Header />

          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route>
              <Route path="/Account" element={<AccountAndStatus />} />
              <Route path="/profile" element={<AccountSetting />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <FooterContainer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
