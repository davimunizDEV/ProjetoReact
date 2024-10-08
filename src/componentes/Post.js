import { FaHouseChimneyMedical } from "react-icons/fa6";
import "./Post.css"

export default function Post(props) {
    return(
        <div className="Post">
            <div className="Post"> 
                <div className="Post-Cabeçalho">
                    <div className="avatar"></div>
                    <div className="Post-Nome">Nome</div>
                </div>
                <div className="Post-Conteudo">
                   <img src={props.imagem} />
                </div>
                <div className="Rodapé">
                 <div className='Like'><FaHouseChimneyMedical /></div>
                 <div className="comentario"></div>   
                </div>
            </div>
        </div>
    )
}