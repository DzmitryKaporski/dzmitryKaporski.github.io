import React from 'react';

function ListFC(props) {

    const { arr, isOrdered } = props;
    const List = arr.map((item, index) => <li key={index}>{item}</li>)

    return (
        <div>
            {List.length > 0 && !isOrdered ? <ol>{List}</ol> :
                List.length > 0 && isOrdered ? <ul>{List}</ul> : <h2>No items</h2>}
        </div>
    )
}

export default ListFC;
