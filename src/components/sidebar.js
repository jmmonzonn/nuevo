import { ReactComponent as HomeLogo} from '../falso_back_end/home.svg'
import './sidebar.css'
import React, { useContext } from "react"
import { Context } from "../store/appContext"
const Sidebar = (props) => {
    const { store, actions } = useContext(Context)
    return (
        <div
            className=" fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar"
        >
            <div class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul class="flex flex-col py-4 space-y-1">
            
                    <li onClick={()=>actions.setItem("actualView", "home")}>
                        <a href="#" class="holaHover relative flex flex-row items-center h-11 focus:outline-none hover:text-blue-400 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                        
                            <span class="inline-flex justify-center items-center ml-4">
                            <HomeLogo id="hola" class="keloke w-5 h-5" fill={"white"} />
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Inicio</span>
                        </a>
                    </li>
                    <li onClick={()=>actions.setItem("actualView", "transfers")}>
                        <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:text-blue-400 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Transferencia</span>
                            {/* <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">New</span> */}
                        </a>
                    </li>
                    <li onClick={()=>actions.setItem("actualView", "deposits")}>
                        <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:text-blue-400 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Depósito</span>
                        </a>
                    </li>
                    <li onClick={()=>actions.setItem("actualView", "withdrawals")}>
                        <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:text-blue-400 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Retiro</span>
                        </a>
                    </li>
                    <li onClick={()=>actions.setItem("actualView", "debts")}>
                        <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:text-blue-400 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                            <span class="inline-flex justify-center items-center ml-4">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Préstamos</span>
                        </a>
                    </li>
                </ul>
                <p class="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2023</p>
            </div>
            {/* <Logo /> */}
            {/* <Search /> */}
            {/* {dataButtons.map((value, index )=> {
                    return <Button text={value.text} route={value.route} key={index} />
                })} */}
            {/* <div className="my-4 bg-gray-600 h-[1px]"></div> */}
        </div>
    )
}

export default Sidebar