import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import style from "../layouts/MainLayout.module.css"
import About from "../pages/About/About"
import Home from "../pages/Home/Home"
import Projects from "../pages/Projects/Projects"
import Skills from "../pages/Skills/Skills"

export default function MainLayout({children}){
    return(
        <div className={style["main-layout"]}>
        <Header/>
        {children ? ( <main>{children}</main>):(

        <main>
        <section id="home"><Home/></section>
        <section id="about"><About/></section>
        <section id="projects"><Projects/></section>
        <section id="skills"><Skills/></section>
</main>
        )}
        <Footer/>
        </div>
    )
}