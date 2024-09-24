import logo from '../imagens/Instagram.webp';

function ConteudoLateral(){
    return(
        <div className="ConteudoLateral">
            <img scr={logo} alt = 'logo' className='logo'></img>
        <div>logo</div>
        <div>menu
          <ul>
            <li>home</li>
            <li>pesquisa</li>
            <li>explorar</li>
            <li>mensagens</li>
          </ul>
        </div>
      </div>
    );
}
export default ConteudoLateral;