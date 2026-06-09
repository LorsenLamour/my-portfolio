import style from '../Home/Home.module.css';
const homeDescription = {
    title: `Hi, my name is Lamour Lorsen.`,
    description: `I'm a computer science student always eager to learn and a creator of modern, elegant & functional web interfaces!`
}

function Home() {
    return (
        <div>
            <h1 className={style["home-title"]}>{homeDescription.title}</h1>
            <h4 className={style["home-description"]}>{homeDescription.description}</h4>

        </div>







    )
}
export default Home;