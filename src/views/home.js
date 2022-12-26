import React, { useEffect, useContext } from "react"
import { Context } from "../store/appContext"

const Home = () => {

    const { store, actions } = useContext(Context)

    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0
      })

    useEffect(() => {
        for (const account of store.backend.accounts) {
            if (account.user_uid == store.user.uid) {
                actions.setItem("userAccount", account)
            }
        }
        let allDebts = []
        store.backend.debts?.forEach((debt) => {
            if (debt.user_uid == store.user.uid) {
                allDebts.push(debt)
                actions.setItem("userDebts", allDebts[0])
            }
        })
    }, [])

    return (

        <>

            {

                store.userAccount &&

                <>

                    <div className="absolute h-screen w-11/12 md:w-9/12 left-16 top-11 md:left-64 bg-gray-700  flex flex-col gap-9  place-items-start ">
                        <div className=" w-10/12 sm:w-11/12 ">
                            <div className="flex flex-row bg-gray-800 min-w-full rounded-xl mr-10 ml-6 py-4 mt-8 relative">
                                <div className='hidden md:flex mx-10  items-center space-x-4 border-red-500'>
                                    <a className='flex-shrink-0 w-32 h-32 overflow-hidden rounded-full'>
                                        <img src={store.apiUser?.image} className='object-cover w-full h-full' />
                                    </a>
                                </div>
                                <div className="px-4 mx-4 pb-4 flex flex-col">
                                    <div className="text-white mt-4 flex flex-row  ">
                                        <h1 className="mt-1 text-lg">{store.apiUser?.name}</h1>
                                        <h1 className=" mx-8 text-green-600 text-xl md:text-4xl absolute right-0">{formatter.format(store.userAccount.ammount)}</h1>
                                    </div>
                                    <div className="text-gray-200  flex flex-col">
                                        <h1 className="mb-1 text-sm">{store.apiUser?.gender}, {store.apiUser?.species}</h1>
                                        <h1 className=" text-sm">{store.apiUser?.location.name}</h1>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-row bg-gray-800 min-w-full rounded-xl ml-6 mr-4 py-4 mt-6 relative">
                                <div className="px-4 mx-4 pb-4 flex flex-col">
                                    <div className="text-white mt-4 flex flex-row">
                                        <h1 className="mt-1 text-sm md:text-3xl">IBAN</h1>
                                        <h1 className=" mx-8 text-lg md:text-4xl absolute right-0">{store.userAccount.IBAN}</h1>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-row bg-gray-800 rounded-xl ml-6 mr-4 py-4 mt-6 min-w-full relative">
                                <div className="px-4 mx-4 pb-4 flex flex-col">
                                    <div className="text-white mt-4 flex flex-row">
                                        <h1 className="mt-1 text-lg md:text-3xl">Deudas </h1>
                                        <h1 className=" mx-8 text-xl text-red-600 md:text-4xl absolute right-0">{formatter.format(store.userDebts?.actual_debt)}</h1>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </>

            }
        </>
    )
}

export default Home