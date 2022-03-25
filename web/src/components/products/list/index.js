import'./style.css';

const Products = () => {
  return(
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWGKlNySkOOSGtla_jp_wJa2PVzssvyYEWbXBtN2zMwlkb17qjxj0valaii9NizfGBktbNDk9X4Q0q6cDQq1g2oNcUJ-H4eviwSosZvyVcjA3HhZ4Kkn4mQw&usqp=CAE" />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>Truss Infusion Shampoo - 300 Ml</b>
          </small>
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
        <div className="col-3">

        </div>
      </div>
    </div>
  )
}

export default Products;
