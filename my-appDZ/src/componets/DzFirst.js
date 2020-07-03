import React from 'react';
import { Link } from 'react-router-dom';

function DzFirst(props) {
    return (
        <div>
            <h1 className='titleColorWhite'>{props.title}</h1>
            <ul>
                <li>
                    <Link to='/ColoredTitle'>Colored title</Link>
                </li>
                <li>
                    <Link to='/InputSubmit'>Input submit</Link>
                </li>
                <li>
                    <Link to='/ListCC'>List Class component</Link>
                </li>
                <li>
                    <Link to='/ListFC'>List Function component</Link></li>
                <li>
                    <Link to='/TitleFC'>Title Function component</Link>
                </li>
                <li>
                    <Link to='/TitleCC'>Title Class component</Link>
                </li>
            </ul>
        </div>
    )
};

export default DzFirst;
