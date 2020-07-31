import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [Values, setValues] = useState(valoresIniciais);
  


  function setValue(chave, valor) {
    //chave: nome, descricao e por ai vai
    setValues({
      ...Values,
      [chave]: valor, //nome: 'valor'
    })

  }
  // function handlechange(infoEvento) {
  //   /*
  //   infoEvento
  //   */
  //   const {getAttribute, value} = infoEvento.target; //desconstruindo o objeto para reduzir codigo
  //   setValue(
  //     getAttribute('name'), 
  //     value
  //     );
  //   }

  function handlechange(infoEvento) {
    setValue(
      infoEvento.target.getAttribute('name'),
      infoEvento.target.value
    );
  }
    return (
      <PageDefault>
        <h1>Cadastrar Categoria: {Values.nome}</h1>
        
        <form onSubmit={function handleSubmit(infoEvento){
          infoEvento.preventDefault();
          setCategorias([
            ...categorias,
            Values
          ]);

          setValues(valoresIniciais);
        }}>

          <FormField
            input = "text"
            label="Nome da Categoria:"
            type="text"
            name="nome"
            value={Values.nome}
            onChange={handlechange}
          />

          <FormField
            label="Descrição:"
            type="textarea"
            name="descricao"
            value={Values.descricao}
            onChange={handlechange}
          />

          <FormField
            label="Cor:"
            type="color"
            name="cor"
            value={Values.cor}
            onChange={handlechange}
          />

            <button>
              Cadastrar
            </button>
        </form>
            <ul>
              {categorias.map((categoria, indice) =>{
                  return (
                    <li key={`${categoria}${indice}`}>
                      {categoria.nome}
                    </li>
                  )
              })}
            </ul>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
  
    )
}
export default CadastroCategoria;