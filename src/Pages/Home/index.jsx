//import Banner from "../../Components/Banner"
//import Header from "../../Components/Header"
import Banner from "../../Components/Banner";
import Card from "../../Components/Card";
import data from "../../data.json"
import "../../styles/Home/home.css"
function Home() {
    return <>
    <Banner description="Chez vous, partout et ailleurs" classbanner="banner--home"/>
    <div className="gallery">
    {data.map((appartement) => (
        <Card
            key={appartement.id}
            cover={appartement.cover}
            title={appartement.title}
            id={appartement.id}
        />
    ))} 
    </div>
  </>
    
}
export default Home;
