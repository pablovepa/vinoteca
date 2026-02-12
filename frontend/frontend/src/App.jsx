import { useEffect, useState } from 'react';
import FormularioVino from './components/FormularioVino';

function App() {
  const [vinos, setVinos] = useState([]);

  // Función para traer vinos del backend
  const obtenerVinos = async () => {
    const res = await fetch('http://localhost:5000/api/vinos');
    const data = await res.json();
    setVinos(data);
  };

  useEffect(() => {
    obtenerVinos();
  }, []);

  // Esta función se ejecuta cuando el formulario guarda un vino con éxito
  const manejarNuevoVino = (nuevoVino) => {
    setVinos([...vinos, nuevoVino]);
  };


  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#222', // Color de letra principal
      backgroundColor: '#fff' // Fondo de la página
    }}>
      <h1 style={{ color: '#722f37', textAlign: 'center' }}>🍷 Mi Vinoteca Digital</h1>

      <FormularioVino onVinoAgregado={manejarNuevoVino} />

      <h2>Inventario Actual</h2>
      <div style={styles.lista}>
        {vinos.map(vino => (
          <div key={vino._id} style={styles.tarjeta}>
            <strong>{vino.nombre}</strong> - {vino.bodega}
            <span style={{ color: '#722f37', fontWeight: 'bold' }}> ${vino.precio}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
const styles = {
  lista: {
    display: 'grid',
    gap: '10px'
  },
  tarjeta: {
    padding: '15px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  }
};
export default App;