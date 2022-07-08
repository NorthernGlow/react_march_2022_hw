import React from 'react';

function AlbumComponent({item}) {
    return (
        <div>
            {item.id} - {item.title}
        </div>
    );
}

export default AlbumComponent;