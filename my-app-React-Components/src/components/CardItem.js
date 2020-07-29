// @ts-nocheck
import Button from '@material-ui/core/Button';
import Context from '../Context';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useContext, useState } from 'react';
import { ToggleStateEdit, ToggleStateDesc } from './AllToggles';


function CardItem({ id, card, editCard }) {
    const [isEditing, toggleEditForm] = ToggleStateEdit(false);
    const [isDescription, toggleDescription] = ToggleStateDesc(false);
    const [inputPicture, updateInputPicture] = useState(card.picture);
    const [inputName, updateInputName] = useState(card.name);
    const [inputArticle, updateInputArticle] = useState(card.article);
    const [inputCount, updateInputCount] = useState(card.count);
    const [inputPrice, updateInputPrice] = useState(card.price);
    const { removeCard } = useContext(Context);

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let splitInputArticle = inputArticle.split('');

    function submitHandler(event) {
        event.preventDefault();
        editCard(id, inputName, inputArticle, inputCount, inputPrice, inputPicture, today, dd, mm, yyyy,);
        toggleEditForm();
    };

    return (
        <div className={card.priceSegment === 'cheap' ? 'card-item-wrapper__border-color_gray' :
            card.priceSegment === 'optimal' ? 'card-item-wrapper__border-color_green' :
                card.priceSegment === 'premium' ? 'card-item-wrapper__border-color_yellow' : null}
        >
            {isEditing ?
                <div className='card-item-wrapper' >
                    {card.picture ?
                        <p><img className='card-item-wrapper__img-style' src={card.picture} alt=''></img></p> :
                        <p><img className='card-item-wrapper__img-style' src={'https://clck.ru/PighN'} alt=''></img></p>}

                    <form onSubmit={submitHandler} >

                        <div className='card-item-input-wrap'>
                            {'Picture: '}
                            <input className='card-item-input_width-130px'
                                value={inputPicture}
                                onChange={event => { updateInputPicture(event.target.value) }}
                            />
                        </div>

                        <div className='card-item-input-wrap'>
                            {'Name: '}
                            <input className={inputName.length < 5 ?
                                'edit-input-validation' : 'card-item-input_width-130px'}
                                value={inputName}
                                minLength='5'
                                required
                                onChange={event => { updateInputName(event.target.value) }}
                            />
                        </div>

                        <div className='card-item-input-wrap'>
                            {'Article: '}
                            <input
                                className={splitInputArticle[0] > 'Z' || isNaN(splitInputArticle[1]) || isNaN(splitInputArticle[2]) ?
                                    'edit-input-validation' : 'card-item-input_width-130px'}
                                value={inputArticle}
                                minLength='3'
                                required
                                pattern='[A-ZА-Я]{1}[0-9]{2,}'
                                onChange={event => { updateInputArticle(event.target.value) }}
                            />
                        </div>

                        <div className='card-item-input-wrap'>
                            {'Count: '}
                            <input
                                className='card-item-input_width-130px'
                                type='number'
                                value={inputCount}
                                min='1'
                                onChange={event => { updateInputCount(event.target.value) }}
                            />
                        </div>

                        <div className='card-item-input-wrap'>
                            {'Price: '}
                            <input
                                className='card-item-input_width-130px'
                                type='number'
                                min='1'
                                value={inputPrice}
                                onChange={event => { updateInputPrice(event.target.value) }}
                            />
                        </div>

                        <div className="card-item__edit-buttons-wrap">

                            <Button
                                size="small"
                                type='submit'
                                color="primary"
                                variant="outlined"
                            >Save</Button>

                            <Button
                                startIcon={<DeleteIcon />} size="small" color="secondary" variant="outlined"
                                onClick={() => removeCard(card.id)}
                            ></Button>

                        </div>
                    </form>
                </div>
                :
                <>
                    <div className='card-item-wrapper'>

                        {card.picture ?
                            <p><img className='card-item-wrapper__img-style' src={card.picture} alt=''></img></p> :
                            <p><img className='card-item-wrapper__img-style' src={'https://clck.ru/PighN'} alt=''></img></p>}

                        <div>{'Name: ' + card.name}</div>
                        <div>{'Article: ' + card.article}</div>
                        <div className={card.count == 1 || inputCount == 1 ? 'card-item__count-color-text-last-one__red' : null} >
                            {'Count: '} {card.count == 1 || inputCount == 1 ? 'LAST ONE' : card.count}</div>
                        <div>{'Price: ' + card.price}</div>
                        <div>{'Date: ' + card.creationDate}</div>

                        {card.description !== '' && isDescription ? <div>{'Description: ' + card.description}</div> : null}

                    </div>
                    &nbsp;
                    <div className="card-item__buttons">

                        <Button
                            startIcon={<EditIcon />}
                            color="primary"
                            variant="outlined"
                            onClick={toggleEditForm}>
                        </Button>

                        {card.description === '' ? null :
                            <Button
                                size="small"
                                color="primary"
                                variant="outlined"
                                onClick={toggleDescription}>Description
                        </Button>}

                    </div>
                </>
            }
        </div>
    )
};

export default CardItem;
