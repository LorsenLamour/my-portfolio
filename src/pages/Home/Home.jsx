import '../Home/Home.css';
const homeDescription = {
    title: `Creator of modern, elegant & functional web interfaces!`,
    description: `Hi, my name is Lamour Lorsen. I'm a computer science student always eager to learn.`
}

function Home() {
    return (
        <div>

            <h1 className="homeTitle">{homeDescription.title}</h1>
            <h4 className="homeDescription">{homeDescription.description}</h4>

        </div>







    )
}
export default Home;