import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
      .then((r) => r.json())
      .then((json) => setNutri(json));
  }, []);

  return (
    <div>
      <header className='header'>
        <strong>Nutrição</strong>
        <nav className='nav'>
          <a href="#home">Home</a>
          <a href="#artigos">Artigos</a>
          <a href="#contato">Videos</a>
          <a href="#sobre">Sobre nós</a>
        </nav>
      </header>
      <div className='container'>
        {nutri.map((item) => {
          return (
            <article className='artigo' key={item.id}>
              <strong>{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} />
              <p>{item.subtitulo}</p>
              <button>Acessar</button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default App;