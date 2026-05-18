import { useEffect, useState } from 'react';
import '../css/TodoItem.css';
import { Palomita } from '../svg/Palomita';
import { Tache } from '../svg/Tache';
import { ITunesLogo } from '../svg/ITunesLogo';

function TodoItem(props) {
    const [album, setAlbum] = useState(
        'https://euroceramica.co/wp-content/uploads/2021/11/EUROCERAMICA-BARRANQUILLA-BLANCO-50X50PRODUCTO-300x300.jpg'
    );
    const [cancion, setCancion] = useState('Recomendacion');
    const [artista, setArtista] = useState('Artista');
    const [enlace, setEnlace] = useState('');

    useEffect(() => {
        const query = encodeURIComponent(props.texto);

        fetch(
            `https://itunes.apple.com/search?term=${query}&media=music&entity=song&limit=1`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.results && data.results.length > 0) {
                    const track = data.results[0];
                    const artwork = track.artworkUrl100.replace('100x100', '300x300');
                    setAlbum(artwork);
                    setCancion(track.trackName);
                    setArtista(track.artistName);
                    setEnlace(track.trackViewUrl);
                }
            });
    }, []);

    return (
        <div className={`item ${props.completed && 'item--completed'}`}>
            <div>
                <li>
                    <span id="palomita" onClick={props.onComplete}>
                        <Palomita />
                    </span>
                    <p>{props.texto}</p>
                    <span id="tache" onClick={props.onDelete}>
                        <Tache color={'#fff'} />
                    </span>
                </li>
            </div>
            <div className="songInfo">
                <img src={album} alt="" />
                <span>
                    {' '}
                    {cancion} | {artista}
                </span>
                <a href={enlace} target="_blank" rel="noreferrer" className="apple-music-link">
                    <ITunesLogo />
                </a>
            </div>
        </div>
    );
}

export { TodoItem };
