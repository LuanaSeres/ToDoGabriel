import React from "react";
import "./App.css"
import Cria_Tarefa from "./Components/Cria_tarefa/Cria_Tarefa";

function App(){
  return(
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <Cria_Tarefa/>
    </div>
  )
}

export default App