import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="ruta-de-la-imagen-1.jpg" className="d-block w-100" alt="Imagen 1" />
        </div>
        <div className="carousel-item">
          <img src="ruta-de-la-imagen-2.jpg" className="d-block w-100" alt="Imagen 2" />
        </div>
        <div className="carousel-item">
          <img src="ruta-de-la-imagen-3.jpg" className="d-block w-100" alt="Imagen 3" />
        </div>
      </div>
    </div>
  );
};

const ButtonGroup = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <button className="btn btn-primary mx-2">Registrarse</button>
      <button className="btn btn-primary mx-2">Ingresar</button>
      <button className="btn btn-primary mx-2">Tienda</button>
    </div>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Carousel />
      <ButtonGroup />
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <Card
            title="Card 1"
            description="Descripción de la Card 1"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <Card
            title="Card 2"
            description="Descripción de la Card 2"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <Card
            title="Card 3"
            description="Descripción de la Card 3"
          />
        </div>
      </div>
    </div>
  );
};

export default App;


