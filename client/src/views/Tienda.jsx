import React from 'react';


const Card = () => {
  return (
    <div className="card m-2">
      <img src="https://placedog.net/500" className="card-img-top" alt="Imagen del producto" />
      <div className="card-body">
        <h5 className="card-title">Título del producto</h5>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Comprar</button>
          <button className="btn btn-success">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <Card />
        </div>
        <div className="col-lg-4 col-md-6">
          <Card />
        </div>
        <div className="col-lg-4 col-md-6">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
