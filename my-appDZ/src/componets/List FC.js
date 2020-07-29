import React from 'react';

function ListFC(props) {

    const { arr, isOrdered } = props;
    const list = arr.map((item, index) => <li className='itemListInputSubmit' key={index}>{item}</li>)

    return (
        <div className='startLeft'>
            <h1 className='startCenter'>{props.title}</h1>
            {list.length > 0 && !isOrdered ? <ol>{list}</ol> :
                list.length > 0 && isOrdered ? <ul>{list}</ul> :
                    <h2 className='startCenter'>No items</h2>}
        </div>
    )
}

export default ListFC;
