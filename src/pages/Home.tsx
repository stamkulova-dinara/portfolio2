import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HomeHeader } from "../components/HomeHeader"
import { Projects } from "../components/Projects"

export const Home = () =>{
    return (
        <>
        <Header/>
            <HomeHeader/>
            <Projects/>
            <Footer/>
        </>
    )
}