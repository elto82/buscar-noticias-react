import React from "react";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  const imagen = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">{imagen}</div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="waves-effect waves-light btn "
        >
          Leer Noticia
          <span className="new badge blue" data-badge-caption="">
            {source.name}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Noticia;
