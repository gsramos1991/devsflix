import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import cadastroVideo from './Pages/Cadastro/Video';
import CadastroCateogoria from './Pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/cadastro/video" component={cadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCateogoria} />
      <Route component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,j