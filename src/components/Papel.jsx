import React, { useEffect, useRef } from "react";
import { dia, shapes } from "jointjs";
import "jointjs/dist/joint.css"; // Asegúrate de importar los estilos de JointJS

// dia: Es el módulo de JointJS que maneja gráficos y papel (canvas donde se dibujan los diagramas).
// shapes: Contiene las formas predefinidas que puedes dibujar en JointJS.

const Papel = () => {
  const paperRef = useRef(null);

  useEffect(() => {
    const namespace = shapes;

    // Crear el gráfico VACIO
    const graph = new dia.Graph({}, { cellNamespace: namespace });

    // Crear el "paper" donde se dibujará el gráfico
    const paper = new dia.Paper({
      el: paperRef.current, // El div que será el contenedor del paper
      model: graph,
      width: 300,
      height: 300,
      background: { color: "#F5F5F5" },
      cellViewNamespace: namespace,
    });

    // Puedes agregar más lógica para agregar formas o manipular el gráfico aquí

    // Crear y agregar rectángulos al gráfico
    const rect1 = new shapes.standard.Rectangle();
    rect1.position(25, 25);
    rect1.resize(180, 50);
    rect1.addTo(graph);

    const rect2 = new shapes.standard.Rectangle();
    rect2.position(95, 225);
    rect2.resize(180, 50);
    rect2.addTo(graph);

    //Para cambiar el color de los trazos de los Cuadrados
    // rect1.attr('label', { text: 'Hello', fill: '#353535' });
    // rect2.attr('label', { text: 'World!', fill: '#353535' });

    const link = new shapes.standard.Link();
    link.source(rect1);
    link.target(rect2);
    link.addTo(graph);


    
    link.appendLabel({
      attrs: {
        text: {
          text: "to the",
        },
      },
    });
    link.router("orthogonal");
    link.connector("straight", { cornerType: "line" });


  }, []);

  return (
    <div className="flex justify-center items-center">
      <h3>JointJS Diagram</h3>
      <div id="paper" ref={paperRef} style={{ border: "1px solid black" }} />
    </div>
  );
};

export default Papel;
