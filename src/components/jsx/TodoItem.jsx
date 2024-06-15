import { useEffect, useState } from 'react'
import "../css/TodoItem.css"
import { Palomita } from '../svg/Palomita';
import { Tache } from '../svg/Tache';



function TodoItem(props){
  const [album,setAlbum]= useState("https://euroceramica.co/wp-content/uploads/2021/11/EUROCERAMICA-BARRANQUILLA-BLANCO-50X50PRODUCTO-300x300.jpg");
  const [cancion,setCancion]= useState("Recomendacion");
  const [artista,setArtista]= useState("Artista");
  const [enlace,setEnlace]= useState("");



  useEffect(()=>{
    let token = props.accessToken;

    //Obtener el nombre de la cancio, link y foto.
    let parameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      }
    }

    fetch("https://api.spotify.com/v1/search?q=" + props.texto + "&type=track&limit=1", parameters)
      .then(response => response.json())
      .then((data) => {
      setAlbum(data.tracks.items[0].album.images[2].url);
      setCancion(data.tracks.items[0].name);
      setArtista(data.tracks.items[0].artists[0].name);
      setEnlace(data.tracks.items[0].external_urls.spotify);
      })
  }, [])
  
    return(
      <div className={`item ${props.completed && "item--completed"}`}>
        <div>
        <li>
          <span 
          id='palomita'
          onClick={props.onComplete}
          ><Palomita/></span>
          <p>{props.texto}</p>
          <span
          id='tache'
          onClick={props.onDelete}
          ><Tache color={"#fff"}/></span>
        </li>
        </div>
        <div className='songInfo'>
          <img src={album} alt="" />
          <span> {cancion} | {artista}</span>
          <a href={enlace} target="_blank" rel="noreferrer">
            <img src={'/img/spotifyLogo.png'} alt="Spotify Logo" />
          </a>
        </div>
      </div>
    );
  }

export {TodoItem}
