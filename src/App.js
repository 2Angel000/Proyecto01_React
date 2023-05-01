import "./App.css";
import "./personalizado.css";
//para importar imagenes
import imagen from "./imagenes/5895c1c9cba9841eabab604b.png";
import rey1 from "./imagenes/rey_atanagildo.png";
import rey2 from "./imagenes/rey_leogivildo.png";
import rey3 from "./imagenes/rey_sisebuto.png";

function App() {
  let nombre = ["Angel", "José", "Manuel"];
  let objNombre = { nombre: "Angel", edad: 22 };
  let objNombre2 = [
    { nombre: "Angel", edad: 22, carrera: "Ing. En Sistemas" },
    { nombre: "José", edad: 20, carrera: "Ing. Civil" },
    { nombre: "Manuel", edad: 20, carrera: "Ing. En informatica" },
  ];
  let caja = <div>Nombre: </div>;
  const reyes = [
    { imagen: rey1, nombreRey: "Sisebuto" },
    { imagen: rey2, nombreRey: "Leofivildo" },
    { imagen: rey3, nombreRey: "Atanagildo" },
  ];

  return (
    <div className="App-header fondo borde">
      <h1 className="colorLetra">Curso de React</h1>
      <img src={imagen} className="img" />
      <div>{caja}</div>
      <input value={nombre[0]} />
      <br />
      <input value={objNombre.edad} />
      <br />
      <input value={objNombre2[0].carrera} />
      <br />
      <br />

      <div className="header-reyes fondo borde">
        <h2>Actividad #1</h2>
        <div className="flex-container">
          <div className="flex-item fondo-item">
            <img src={reyes[0].imagen} className="img-reyes" />
            <p className="nombre-rey">{reyes[0].nombreRey}</p>
          </div>
          <div className="flex-item fondo-item">
            <img src={reyes[1].imagen} className="img-reyes" />
            <p className="nombre-rey">{reyes[1].nombreRey}</p>
          </div>
          <div className="flex-item fondo-item">
            <img src={reyes[2].imagen} className="img-reyes" />
            <p className="nombre-rey">{reyes[2].nombreRey}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
