import { login } from "../auth"
import './login.css'
import React, { useState, useContext } from "react"
import { Context } from "../store/appContext"
const Login = () => {

    const { store, actions } = useContext(Context)

    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        let logged = await login(form)
        if (logged) {
            fetch(logged.url)
                .then((res) => { return res.json() })
                .then((data) => { actions.setItem("apiUser", data); })
            actions.setItem("logged", true)
            actions.setItem("user", logged)
            for (const account of store.backend.accounts) {
                if (account.user_uid == logged.uid) {
                    actions.setItem("userAccount", account)
                }
            }
            let allDebts = []
            store.backend.debts?.forEach((debt) => {
                if (debt.user_uid == logged.uid) {
                    allDebts.push(debt)
                    actions.setItem("userDebts", debt)
                }
            })
        }

    }

    return (

        <>

            <div className="w-screen bg-black  grid h-screen place-items-center items-center">
                <div className="cardLogin">
                    <label
                        className="text-white"
                        htmlFor="email">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                        onChange={handleChange}
                        onKeyDown={(e) => e.key == 'Enter' ? handleSubmit() : ""}
                    >
                    </input>
                    <label
                        className="text-white"
                        htmlFor="password">
                        Password
                    </label>
                    <input
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onKeyDown={(e) => e.key == 'Enter' ? handleSubmit() : ""}
                    >
                    </input>
                    <button
                        className="group mt-5 relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

                        onClick={handleSubmit}>
                        Iniciar sesión
                    </button>
                </div>
            </div>


        </>
    )
}

export default Login