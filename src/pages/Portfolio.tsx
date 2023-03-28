import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { PortfolioContent } from "../components/PortfolioComponent/content"
import { PortfolioHeader } from "../components/PortfolioComponent/header"

export const Portfolio = () => {
    return (
       <>
       <Header/>
       <PortfolioHeader/>
       <PortfolioContent/>
       <Footer/>
       </> 
    )
}