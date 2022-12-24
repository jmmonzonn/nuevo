import { ReactComponent as HomeLogo } from '../falso_back_end/home.svg'
import { ReactComponent as TransferLogo } from '../falso_back_end/transfer.svg'
import { ReactComponent as DepositLogo } from '../falso_back_end/deposit.svg'
import { ReactComponent as WithdrawalLogo } from '../falso_back_end/withdrawal.svg'
import { ReactComponent as DebtLogo } from '../falso_back_end/debt.svg'
import React, { useContext } from "react"
import { Context } from "../store/appContext"

const Sidebar = () => {

    const { store, actions } = useContext(Context)

    return (

        <>

            <div
                className=" fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar"
            >
                <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                    <ul class="flex flex-col py-4 space-y-1">

                        <li onClick={() => actions.setItem("actualView", "home")}>
                            <a href="#" class="holaHover relative flex flex-row items-center h-11 focus:outline-none hover:text-blue-400 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">

                                <span class="inline-flex justify-center items-center ml-4">
                                    <HomeLogo class="w-5 h-5" fill={"white"} />
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Inicio</span>
                            </a>
                        </li>
                        <li onClick={() => actions.setItem("actualView", "transfers")}>
                            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:text-blue-400 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <TransferLogo class="w-5 h-5" fill={"white"} />
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Transferencia</span>
                            </a>
                        </li>
                        <li onClick={() => actions.setItem("actualView", "deposits")}>
                            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:text-blue-400 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <DepositLogo class="w-5 h-5" fill={"white"} />
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Depósito</span>
                            </a>
                        </li>
                        <li onClick={() => actions.setItem("actualView", "withdrawals")}>
                            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:text-blue-400 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <WithdrawalLogo class="w-5 h-5" fill={"white"} />
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Retiro</span>
                            </a>
                        </li>
                        <li onClick={() => actions.setItem("actualView", "debts")}>
                            <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:text-blue-400 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <DebtLogo class="w-5 h-5" fill={"white"} />
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Préstamos</span>
                            </a>
                        </li>
                    </ul>
                    <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2023</p>
                </div>
            </div>

        </>

    )
}

export default Sidebar