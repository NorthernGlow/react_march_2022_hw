import React from 'react';

function TodoComponent({item}) {
    return (
        <div>
            {item.id} - {item.title}
        </div>
    );
}

export default TodoComponent;