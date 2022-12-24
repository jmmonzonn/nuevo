import React, { useState, useContext } from "react"
import { Context } from "../store/appContext"

const Transfers = () => {

    const { store, actions } = useContext(Context)

    const [newTransfer, setNewTransfer] = useState({})


    const handleChange = (e) => {
        setNewTransfer({ ...newTransfer, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        store.backend.accounts.forEach((account) => {
            if (account.IBAN === newTransfer.IBAN) {
                fetch("http://localhost:3001/accounts/" + account.id, {
                    method: "PUT",
                    body: JSON.stringify({
                        id: account.id,
                        IBAN: account.IBAN,
                        ammount: parseFloat(account.ammount) + parseFloat(newTransfer.ammount),
                        user_uid: account.user_uid
                    }),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                    .then(res => {
                        console.log(res.status);
                        if (res.status === 200) {
                            fetch("http://localhost:3001/accounts/" + store.userAccount.id, {
                                method: "PUT",
                                body: JSON.stringify({
                                    id: store.userAccount.id,
                                    IBAN: store.userAccount.IBAN,
                                    ammount: parseFloat(store.userAccount.ammount) - parseFloat(newTransfer.ammount),
                                    user_uid: store.userAccount.user_uid
                                }),
                                headers: { "Content-type": "application/json; charset=UTF-8" }
                            })
                                .then(res => {
                                    if (res.status === 200) {
                                        actions.setItem("change", store.change === 0 ? 1 : 0)
                                        actions.setItem("userAccount", {
                                            id: store.userAccount.id,
                                            IBAN: store.userAccount.IBAN,
                                            ammount: parseFloat(store.userAccount.ammount) - parseFloat(newTransfer.ammount),
                                            user_uid: store.userAccount.user_uid
                                        })
                                        alert(`Transferencia completada. Saldo actual: ${parseFloat(store.userAccount.ammount)}`)

                                    }
                                })
                        }
                    })

            }
        })
    }

    return (

        <>
            <div className="absolute h-screen w-11/12 md:w-9/12 left-16 top-11 md:left-64 bg-gray-700  flex flex-col gap-9  place-items-start ">
                <div className=" w-11/12 ">
                    <div className=" bg-gray-800 min-w-full rounded-xl ml-6 py-4 mt-6">
                        <div class="flex items-center justify-center p-12">
                            <div class="mx-auto w-full max-w-[550px]">
                                <div class="-mx-3 flex flex-wrap">
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5">
                                            <label
                                                class="mb-3 block text-base font-medium text-white"
                                            >
                                                Cantidad
                                            </label>
                                            <input
                                                type="number"
                                                name="ammount"
                                                onChange={handleChange}
                                                placeholder="0.0"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-5">
                                    <label
                                        class="mb-3 block text-base font-medium text-white"
                                    >
                                        IBAN
                                    </label>
                                    <input
                                        type="text"
                                        name="IBAN"
                                        onChange={handleChange}
                                        placeholder="ES213948721039472"
                                        min="0"
                                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Transfers