import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "../layouts/MainLayout.module.css"

export default function MainLayout({children}){
    return(
        <div className={style["main-layout"]}>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </div>
    )
}