import logo from '../imagens/Instagram.webp';
import ListItem from './ListItem';
export default function ConteudoLateral(){
    return(
        <div className="ConteudoLateral">
            <img src={logo} alt='logo' className='logo'/>
        
        <div>
          <ul className='MenuLateral'>
            <ListItem text='home' icone='casa'/>
            <ListItem text='pesquisa' icone='lupa'/>
            <ListItem text='explorar' icone='bussola'/>
            <ListItem text='mensagens' icone='chat'/>

          </ul>
        </div>
      </div>
    );
}


