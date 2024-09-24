import Header from '../Header';
import Footer from '../Footer';
import "../../styles/main.css"

function MainLayout({ children }) {
  return (
    <>
      <Header />    
      <main className='main'>{children}</main>   
      <Footer />    
    </>
  );
}

export default MainLayout;