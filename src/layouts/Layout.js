import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import Routes from '../routes/routes'

export const LayoutContext = React.createContext()
export default function Layout(){
    const [message, setMessage] = React.useState("Hello World")
    return(
        <BrowserRouter>
            <LayoutContext.Provider value={{message, setMessage}}>
                <SideBar/>
                    <Routes/>
                <Footer/>
            </LayoutContext.Provider>
        </BrowserRouter>
    )
}