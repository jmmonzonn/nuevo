import React, { useState, useContext } from "react"
import { Context } from "../store/appContext"

const Debts = () => {

    const { store, actions } = useContext(Context)

    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0
    })

    const actualDebt = () => {
        if ((store.userDebts.actual_debt - store.userDebts.mensual_payment) > store.userDebts.mensual_payment) {
            return store.userDebts.mensual_payment
        } else {
            return (store.userDebts.actual_debt - store.userDebts.mensual_payment)
        }
    }

    const handleSubmit = () => {
        fetch("http://localhost:3001/debts/" + store.userDebts.id, {
            method: "PUT",
            body: JSON.stringify({
                id: store.userDebts.id,
                initial_debt: store.userDebts.initial_debt,
                actual_debt: parseFloat(store.userDebts.actual_debt) - parseFloat(store.userDebts.mensual_payment),
                mensual_payment: actualDebt(),
                user_uid: store.userDebts.user_uid
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(res => {
                if (res.status === 200) {
                    fetch("http://localhost:3001/accounts/" + store.userAccount.id, {
                        method: "PUT",
                        body: JSON.stringify({
                            id: store.userAccount.id,
                            IBAN: store.userAccount.IBAN,
                            ammount: parseFloat(store.userAccount.ammount) - parseFloat(store.userDebts.mensual_payment),
                            user_uid: store.userAccount.user_uid
                        }),
                        headers: { "Content-type": "application/json; charset=UTF-8" }
                    })
                        .then(res => {
                            if (res.status === 200) {
                                actions.setItem("userAccount", {
                                    id: store.userAccount.id,
                                    IBAN: store.userAccount.IBAN,
                                    ammount: parseFloat(store.userAccount.ammount) - parseFloat(store.userDebts.mensual_payment),
                                    user_uid: store.userAccount.user_uid
                                })
                                actions.setItem("userDebts", {
                                    id: store.userDebts.id,
                                    initial_debt: store.userDebts.initial_debt,
                                    actual_debt: parseFloat(store.userDebts.actual_debt) - parseFloat(store.userDebts.mensual_payment),
                                    mensual_payment: actualDebt(),
                                    user_uid: store.userDebts.user_uid
                                })
                                actions.setItem("message", `Pago completado. Saldo actual: ${formatter.format(parseFloat(store.userAccount.ammount))}`)
                                setTimeout(() => {
                                    actions.setItem("message", null)
                                }, 5000)
                            }
                        })
                }
            })
    }

    return (

        <>

            {

                store.userDebts &&

                <div className="absolute w-11/12 md:w-8/12 lg:w-10/12 pr-4 top-11 md:left-64 bg-gray-700  flex flex-col gap-9  place-items-start ">
                    <div className=" ml-20 sm:ml-20 md:ml-6 w-10/12 sm:w-11/12 ">
                        <div className="flex flex-col bg-gray-800 min-w-full rounded-xl sm:ml-0 mr-10 py-4 mt-8 relative">
                            <div className="px-4 mx-4 mt-4 pb-4 flex flex-row text-white">
                                <h1 className="mt-1 text-sm md:text-3xl">Deuda inicial</h1>
                                <h1 className=" mx-8 text-lg md:text-4xl absolute right-0">{formatter.format(parseFloat(store.userDebts.initial_debt))}</h1>
                            </div>
                            <div className="px-4 mx-4 mt-4 pb-4 flex flex-row text-white">
                                <h1 className="mt-1 text-sm md:text-3xl">Cantidad devuelta</h1>
                                <h1 className=" mx-8 text-lg md:text-4xl absolute right-0 text-green-600">{formatter.format((parseInt(store.userDebts.initial_debt) - parseInt(store.userDebts.actual_debt)))}</h1>
                            </div>
                            <div className="px-4 mx-4 mt-4 pb-4 flex flex-row text-white">
                                <h1 className="mt-1 text-sm md:text-3xl">Deuda actual</h1>
                                <h1 className=" mx-8 text-lg md:text-4xl absolute right-0 text-red-600">{formatter.format(parseFloat(store.userDebts.actual_debt))}</h1>
                            </div>
                            <div className="px-4 mx-4 mt-4 pb-4 flex flex-row text-white">
                                <h1 className="mt-1 text-sm md:text-3xl">Próximo pago</h1>
                                <h1 className=" mx-8 text-lg md:text-4xl absolute right-0">{formatter.format(parseFloat(store.userDebts.mensual_payment))}</h1>
                            </div>
                            {
                                store.userDebts.actual_debt === 0 ?
                                    "" :
                                    <div className="w-full grid items-center place-items-center">
                                        <button
                                            onClick={handleSubmit}
                                            class="hover:shadow-form my-5 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                        >
                                            Adelantar pago
                                        </button>
                                    </div>
                            }

                        </div>
                    </div>
                </div>


            }


        </>
    )
}

export default Debts