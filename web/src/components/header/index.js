import Logo from '../../assets/logowhite.png'
import Logoblue from '../../assets/logoblue.png'

const Header = ({whiteVersion}) => {
  return(
    <div className="col-12">
        <header className="py-4 px-4 text-center">
          <img src={whiteVersion ? Logo : Logoblue} alt="Logo" />
        </header>
    </div>
  )
}

export default Header;
