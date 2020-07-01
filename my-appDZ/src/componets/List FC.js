import React from 'react';

function ListFC(props) {

    const { arr, isOrdered } = props;
    const list = arr.map((item, index) => <li key={index}>{item}</li>)

    return (
        <div>
            {list.length > 0 && !isOrdered ? <ol>{list}</ol> :
                list.length > 0 && isOrdered ? <ul>{list}</ul> : <h2>No items</h2>}
        </div>
    )
}

export default ListFC;
