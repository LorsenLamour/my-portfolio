import MainLayout from '../../layouts/MainLayout';
import '../Home/Home.css';
const homeDescription = {
    title: 'Bienvenu sur mon portfolio personnel',
    description: ''
}

function Home() {
    return (
   <MainLayout>

            <h1 className="homeTitle">{homeDescription.title}</h1>









        </MainLayout>
    )
}
export default Home;