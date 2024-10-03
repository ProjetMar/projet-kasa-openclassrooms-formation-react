import LOGO from '../../assets/logo-footer.png'
import "../../styles/Footer/Footer.css"
function Footer(){
    return(
        <footer className='footer'>
            <div>
                <img src={LOGO} alt="logo de kasa"/>
            </div>
            <p className='footer__p'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer