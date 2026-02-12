import { useState } from 'react';

const FormularioVino = ({ onVinoAgregado }) => {
  const [nombre, setNombre] = useState('');
  const [bodega, setBodega] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoVino = { nombre, bodega, precio: Number(precio) };

    try {
      const response = await fetch('http://localhost:5000/api/vinos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoVino)
      });

      if (response.ok) {
        const data = await response.json();
        onVinoAgregado(data); // Avisamos a la lista que hay un vino nuevo
        setNombre(''); setBodega(''); setPrecio(''); // Limpiamos campos
        alert("🍷 ¡Vino guardado con éxito!");
      }
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };


  return (
    <form onSubmit={handleSubmit} style={styles.formulario}>
      <h3 style={styles.titulo}>Agregar Nuevo Vino</h3>
      <div style={styles.grupoInput}>
        <input
          type="text"
          placeholder="Nombre del vino"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Bodega"
          value={bodega}
          onChange={(e) => setBodega(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.boton}>
        Guardar en Bodega
      </button>
    </form>
  );
};

// Objeto de estilos para que se vea bien y las letras sean NEGRAS
const styles = {
  formulario: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginBottom: '30px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  titulo: {
    color: '#333',
    marginTop: 0
  },
  grupoInput: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '15px'
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    color: '#333', // Fuerza el color de letra a gris oscuro/negro
    backgroundColor: '#fff' // Asegura fondo blanco en el input
  },
  boton: {
    backgroundColor: '#722f37', // Color vino (Bordeaux)
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  }
};


export default FormularioVino;