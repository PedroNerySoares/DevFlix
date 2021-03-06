import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';

import CadastroVideo from './pages/cadastro/videos'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import CadastroCategorias from './pages/cadastro/Categorias/categorias';
const Pagina404 = ()=>(<div>Página 404</div>)


ReactDOM.render(
 <BrowserRouter>
  <Switch>
    
    <Route path="/" component={Home} exact />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategorias} />
    
    
    <Route component={Pagina404} />
  
  </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);

