import React from 'react'
import Navbar from '../components/Navbar'
import Routers from '../routes/Routers'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className='xl:px-[200px] px-3'>
            <Navbar />
            <main>
                <Routers />
            </main>
            <Footer />
        </div>
    )
}

export default Layout