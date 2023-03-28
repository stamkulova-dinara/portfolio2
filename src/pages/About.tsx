import { AboutContent } from "../components/AboutComponent/content"
import { AboutHeader } from "../components/AboutComponent/header"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const About = () => {
    return (
        <>
        <Header/>
            <AboutHeader/>
            <AboutContent/>
            <Footer/>
        </>
    )
}