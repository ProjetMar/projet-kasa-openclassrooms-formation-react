//import Banner from "../../Components/Banner"
//import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Collapse from "../../Components/Collapse";
import "../../styles/propos.css"
const data =  [
    {
      name: 'Fiabilité',
      description:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      name: 'Respect',
      description:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      name: 'Service',
      description:
        'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N ' +
        "'" +
        'hésitez pas à nous contacter si vous avez la moindre question.',
    },
    {
      name: 'Responsabilité',
      description:
        'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l' +
        'hôte qu' +
        'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    },
  ]
function Propos() {
    return <>
    <Banner classbanner="banner--props"/>
    <div className="info">
      {data.map((data) => (
        <Collapse
            key={data.name}
            isMarginZero={false}
            name={data.name}
            description={data.description}
        />
    ))}
    </div>
    </>
}

export default Propos;