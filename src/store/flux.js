const getState = ({ getStore, setStore }) => {
    return {
      store: {
        backend: {},
        change: 0,
        logged: false,
        user: null,
        apiUser: null,
        userAccount: null,
        userDebts: null,
        actualView: "home"
      },
      actions: {
        setItem: (string, item) => {
            let store = getStore()
            setStore({[string]: item})
        }
        },
    };
  };
  
  export default getState;