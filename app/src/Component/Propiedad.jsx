import React from "react";
import { Link } from "react-router-dom";
import "../style/Propiedades.css";

const Propiedad = ({ prop }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src={prop?.imagen[1]}
            className="img-fluid rounded-start"
            alt={prop?.nombre}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link to="/favoritos">
              <button class="favorito" className="btn btn-outline-warning">
                ⭐ FAVORITOS
              </button>
            </Link>
            <Link to={`/detalles/${prop.id}`}>
              <button class="favorito" className="btn btn-outline-warning">
                ⭐ DETALLES
              </button>
            </Link>
            <h5 className="card-title">${prop?.precio}</h5>
            <h5 className="card-title">{prop?.nombre}</h5>
            <p className="card-text">
              <small className="text-muted">{prop?.ubicacion}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propiedad;
