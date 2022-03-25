import Header from '../../components/header/index.js'
import Products from '../../components/products/list/index.js'
import './style.css'
const Checkout = () => {
  return (
    <div className="h-100">
          <Header />
          <div className="container mt-2">
              <div className="row">
                  <div className="col-6">
                      <span className="section-title">Dados de entrega</span>
                      <div className="row mb-3">
                          <div className="col-12">
                              <input
                                  type="text"
                                  placeholder="CEP"
                                  className="form-control form-control-lg">

                              </input>
                          </div>
                      </div>

                      <div className="row mb-3">

                          <div className="col-6">
                              <input
                                  type="text"
                                  placeholder="Cidade"
                                  className="form-control form-control-lg">

                              </input>
                          </div>

                          <div className="col-6 pl-0">
                              <input
                                  type="text"
                                  placeholder="Logradouro"
                                  className="form-control form-control-lg">

                              </input>
                          </div>
                      </div>

                      <div className="row mb-3">

                          <div className="col-5">
                              <input
                                  type="text"
                                  placeholder="Número"
                                  className="form-control form-control-lg">

                              </input>
                          </div>

                          <div className="col-5 pl-0">
                              <input
                                  type="text"
                                  placeholder="Bairro"
                                  className="form-control form-control-lg">

                              </input>
                          </div>

                          <div className="col-2 pl-0">
                              <input
                                  type="text"
                                  placeholder="UF"
                                  className="form-control form-control-lg">

                              </input>
                          </div>
                      </div>

                      <span className="section-title">Dados de pagamnto</span>

                      <div className="row mb-3">
                          <div className="col-12">
                              <input
                                  type="text"
                                  placeholder="Número do cartão"
                                  className="form-control form-control-lg">

                              </input>
                          </div>
                      </div>

                      <div className="row mb-3">

                          <div className="col-6">
                              <input
                                  type="text"
                                  placeholder="Validade"
                                  className="form-control form-control-lg">

                              </input>
                          </div>

                          <div className="col-6 pl-0">
                              <input
                                  type="text"
                                  placeholder="CVV"
                                  className="form-control form-control-lg">

                              </input>
                          </div>
                      </div>

                      <div className="row mb-3">


                          <div className="col-6">
                              <input
                                  type="text"
                                  placeholder="Nome do titular"
                                  className="form-control form-control-lg">

                              </input>
                          </div>

                          <div className="col-6">
                              <input
                                  type="text"
                                  placeholder="CPF / CNPJ do titular"
                                  className="form-control form-control-lg">

                              </input>
                          </div>
                      </div>

                      <div className="row mt-4">
                          <div className="col-12 d-flex justify-content-between align-itens-center">
                              <b>Total:</b>
                              <h3>R$30,00</h3>
                          </div>
                          <div className="col-12">
                              <button className="btn btn-block btn-lg btn-primary">Finalizar compra</button>
                          </div>
                      </div>

                  </div>
                  <div className="col-6">
                      <div className="box col-10 mt-4 mb-4 box-sidebar">
                          <h4>Minha sacola (5)</h4>
                          <div className="row products">
                            {[1,2,3,4,5,6,7,8,9].map((p) => <Products/>)}
                          </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>

  )
}

export default Checkout;
