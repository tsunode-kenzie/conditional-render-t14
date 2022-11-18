import { useState } from 'react';
import { AiFillBulb } from 'react-icons/ai';

import './App.css';
import { Button } from './components/Button';
import { PaginaUm } from './pagina1';
import { PaginaDois } from './pagina2';
import { PaginaTres } from './pagina3';

export const App = () => {
  const [isLight, setIsLight] = useState(false);
  const [pagina, setPagina] = useState('');

  // if(isLight) {
  //   Bulb = <AiFillBulb style={{ fontSize: '250px', color: 'yellow' }} />
  // } else  {
  //   Bulb = <AiFillBulb style={{ fontSize: '250px', color: 'yellow' }} />
  // }

  // switch(pagina) {
  //   case 'paginaUm':
  //     return <PaginaUm setPagina={setPagina} />
  //   case 'paginaDois':
  //     return <PaginaDois setPagina={setPagina}  /> 
  //   default:
  //     return <PaginaTres setPagina={setPagina}  />
  // }


  return (
    <div className="App">
      <h1>Teste</h1>

      {/* {
       isLight ? 
        <AiFillBulb style={{ fontSize: '250px', color: 'yellow' }} />
        : <AiFillBulb style={{ fontSize: '250px', color: 'gray' }} />
      } */}
{/* 
      {
        <AiFillBulb 
          style={{ fontSize: '250px', color: isLight ? 'yellow' : 'gray' }} 
        />
      } */}

      {
        isLight && <AiFillBulb style={{ fontSize: '250px', color: 'yellow' }} />
      }


      <Button type='button' className={isLight ? '' : ''} 
      onClick={() => setIsLight(!isLight)}>
        {
          isLight ? 'off' : 'on'
        }
        </Button>

    </div>
  );
}
