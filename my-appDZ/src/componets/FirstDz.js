import React from 'react';
import { Link } from 'react-router-dom';

function FirstDz(props) {
    return (
        <div>
            <h1 className='startCenter'>{props.title}</h1>
            <ul className='startLeftList'>
                <li>
                    <Link className='colorLink' to='/ColoredTitle'>Colored title</Link>
                </li>
                <li>
                    <Link className='colorLink' to='/InputSubmit'>Input submit</Link>
                </li>
                <li>
                    <Link className='colorLink' to='/ListCC'>List Class component</Link>
                </li>
                <li>
                    <Link className='colorLink' to='/ListFC'>List Function component</Link></li>
                <li>
                    <Link className='colorLink' to='/TitleFC'>Title Function component</Link>
                </li>
                <li>
                    <Link className='colorLink' to='/TitleCC'>Title Class component</Link>
                </li>
            </ul>
        </div>
    )
};

export default FirstDz;
