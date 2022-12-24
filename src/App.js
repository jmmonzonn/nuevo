import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import Login from './components/login';
import React, { useEffect, useState, useContext } from 'react';
import { checkLogin as checkLog } from './auth';
import { Context } from './store/appContext';

import Start from './components/start';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Transfers from './views/transfers';
import injectContext from './store/appContext';
import Deposits from './views/deposits';
import Withdrawals from './views/withdrawals';
import Debts from './views/debts';
import URL_BACKEND from './falso_back_end/urlBackend';


const App = () => {

  const [showApp, setShowApp] = useState(false)
  
  const { store, actions } = useContext(Context)

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => actions.setItem("backend", { ...store.backend, "users": data }))
    fetch("http://localhost:3001/accounts")
      .then(res => res.json())
      .then(data => actions.setItem("backend", { ...store.backend, "accounts": data }))
    fetch("http://localhost:3001/debts")
      .then(res => res.json())
      .then(data => actions.setItem("backend", { ...store.backend, "debts": data }))
  }, [store.change])

  useEffect(() => {
    setTimeout(() => {
      setShowApp(true)
    }, 6500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      checkLogin()
    }, 6000)
  }, [])



  const checkLogin = () => {
    const loggedUser = checkLog()
    if (loggedUser) {
      actions.setItem("logged", true)
      actions.setItem("user", loggedUser)
      fetch(loggedUser.url)
        .then((res) => { return res.json() })
        .then((data) => { actions.setItem("apiUser", data); })
        for (const account of store.backend.accounts) {
          if (account.user_uid == loggedUser.uid) {
              actions.setItem("userAccount", account)
          }
      }
      let allDebts = []
      store.backend.debts.forEach((debt) => {
          if (debt.user_uid == loggedUser.uid) {
              allDebts.push(debt)
              actions.setItem("userDebts", allDebts[0])
          }
      })
    }
  }


  return (
    <>

      {

        showApp ?

          store.logged ?

            <>

              <Header />

              <Sidebar />

              {

                store.actualView === "home" ?

                  <Home />

                  :

                  store.actualView === "transfers" ?

                    <Transfers /> :

                    store.actualView === "deposits" ?

                    <Deposits /> :

                    store.actualView === "withdrawals" ?

                    <Withdrawals /> :

                    store.actualView === "debts" ?

                    <Debts /> :

                    true

              }

            </>
            :
            <Login />
          :
          <Start />
      }
    </>
  );
}

export default injectContext(App);
