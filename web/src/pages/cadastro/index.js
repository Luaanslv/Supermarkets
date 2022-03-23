import ilustration from '../../assets/Ilustration.png'
import Header from '../../components/header/index.js'

const Cadastro = () => {
return (
  <div className="container-fluid h-100 bg-primary">
    <Header whiteVersion/>
    <div className="row">
      <div className="col-6 text-rigt my-auto">
        <img src={ilustration} alt="illustration" className="img-fluid illustration"/>
      </div>
      <div className="col-6">
        <div className="box col-8">
          <h2 className="text-center">Cadastre-se para fazer suas compras.</h2>
          <br/>
          <br/>
          <input type="text" className="form-control form-control-lg mb-3" placeholder="Nome completo"/>
          <input type="email" className="form-control form-control-lg mb-3" placeholder="E-mail"/>
          <input type="password" className="form-control form-control-lg mb-3" placeholder="Senha"/>
          <input type="password" className="form-control form-control-lg mb-3" placeholder="Confirme a senha"/>
          <input type="date" className="form-control form-control-lg mb-3"  placeholder="data de nascimento"/>
          <button className="btn btn-lg btn-block btn-secondary">Finalizar cadastro</button>
        </div>
      </div>
    </div>
  </div>
)
}

export default Cadastro;
