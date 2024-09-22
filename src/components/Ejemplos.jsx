import React, { useRef } from "react";

function FocusInput() {
  // Creamos la cajita mágica para el input
  const inputRef = useRef(null);

  // Función que pone el cursor en el input
  const handleFocus = () => {
    // Abrimos la cajita y ponemos el foco en el input
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Aquí está el campo de texto que queremos controlar */}
      <input ref={inputRef} type="text" placeholder="Escribe algo aquí..." />
      {/* El botón que cuando haces clic pone el cursor en el campo de texto */}
      <button onClick={handleFocus}>Haz clic para enfocar el campo</button>
    </div>
  );
}

export default FocusInput;
