import React from "react";

export default function Joke(props) {
  console.log(props);
  const [isShown, setIsShown] = React.useState(false);
  // useState donde isShown es falso, setIsShown es la funcion handler

  function toogle() {
    // esta funcion cambia el estado de verdadero a falso o viceversa
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {/* si props.setup es verdadero o existe 
      muestra  lo que esta despues del &&*/}
      {isShown && <p>Punchline: {props.punchline}</p>}
      {/* si isShown es verdadero muestra el punchline, sino no lo renderiza */}
      <hr />

      <button className="btn" onClick={toogle}>
        {/* el boton de clase btn al hacer click dispara la funcion toogle */}
        <i
          className={isShown ? "fa fa-envelope-open-o" : "fa fa-envelope-o"}
          /* si isShown es verdadero muestra el sobre abierto si es falso el sobre cerrado */
        ></i>
      </button>
    </div>
  );
}
