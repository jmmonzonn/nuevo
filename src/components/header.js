import { ReactComponent as Logo } from '../falso_back_end/logobank2.svg'
import { logout } from '../auth'
import React, { useContext } from "react"
import { Context } from "../store/appContext"

const Header = () => {

    const { store, actions } = useContext(Context)

    const logOut = () => {
        let res = logout()
        if (res == 200) {
            actions.setItem("logged", false)
            actions.setItem("user", null)
        }
    }

    return (

        <>

            <div className="fixed w-full   bg-gray-800 flex items-center justify-between h-14 text-white z-10">
                <div class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-gray-800 border-none">
                    <Logo className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden " fill={"white"} />
                </div>
                <div class="flex items-center justify-start md:justify-center pl-3 pr-3 mr-2  h-14 bg-gray-800 border-none">
                
                    {
                        store.message ? 

                        store.message :

                        store.actualView === "home" ?

                            "Inicio" :

                        store.actualView === "transfers" ?

                            "Transferencia" :

                        store.actualView === "deposits" ?

                            "Depósito" :

                        store.actualView === "withdrawals" ?

                            "Retiro" :

                            "Préstamos"

                    }
                    
                </div>
                {

                    store.message ?

                    <div class=" hidden md:flex justify-between items-center h-14 bg-gray-800 header-right">
                    <div className='flex items-center justify-between mt-1'>
                        <div className='flex items-center space-x-4'>
                            <a className='flex-shrink-0 w-9 h-9 overflow-hidden rounded-full'>
                                <img src={store.apiUser?.image} className='object-cover w-full h-full' />
                            </a>
                        </div>
                    </div>
                    <ul class="flex items-center">
                        <li>
                            <div class="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                        </li>
                        <li onClick={logOut}>
                            <a href="#" class="flex items-center mr-4 hover:text-blue-300">
                                <span class="inline-flex mr-1">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                </span>
                                Cerrar sesión
                            </a>
                        </li>
                    </ul>
                </div>

                :

                <div class="flex justify-between items-center h-14 bg-gray-800 header-right">
                    <div className='flex items-center justify-between mt-1'>
                        <div className='flex items-center space-x-4'>
                            <a className='flex-shrink-0 w-9 h-9 overflow-hidden rounded-full'>
                                <img src={store.apiUser?.image} className='object-cover w-full h-full' />
                            </a>
                        </div>
                    </div>
                    <ul class="flex items-center">
                        <li>
                            <div class="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                        </li>
                        <li onClick={logOut}>
                            <a href="#" class="flex items-center mr-4 hover:text-blue-300">
                                <span class="inline-flex mr-1">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                </span>
                                Cerrar sesión
                            </a>
                        </li>
                    </ul>
                </div>
                }
                
            </div>

        </>

    )
}

export default Header