import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../layouts/MainLayout.css"

export default function MainLayout({children}){
    return(
        <div className="main-layout">
        <Header/>
        <main>{children}</main>
        </div>
    )
}