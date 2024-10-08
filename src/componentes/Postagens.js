import Post from './Post'
import './Postagens.css'
import img from '../imagens/FRIENDS.png'

export default function Postagens() {
    return (
        <div className='Postagens'>
            <Post imagem={img} />
        </div>
    );
}