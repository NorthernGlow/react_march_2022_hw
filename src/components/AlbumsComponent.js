import React, {useEffect, useState} from 'react';
import {getAlbums} from "../services/all.api.service";
import AlbumComponent from "./AlbumComponent";

function AlbumsComponent(props) {
    let [albums,setAlbums] = useState([]);

    useEffect(()=>{
        getAlbums().then(({data})=>setAlbums([...data]));
    },[])

    return (
        <div>
            Albums:
            {
                albums.map((value,index)=><AlbumComponent
                key={index}
                item={value}/>)
            }
        </div>
    );
}

export default AlbumsComponent;