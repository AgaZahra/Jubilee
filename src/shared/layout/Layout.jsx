import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import Banner from './Banner'

const Layout = () => {
    return (
        <React.Fragment>
            <Banner />
            <Header />
            <BackToTop />
              <Outlet />
            <Footer />

        </React.Fragment>
    )
}

export default Layout