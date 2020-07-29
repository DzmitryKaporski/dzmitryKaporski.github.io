import React from 'react';

class ListCC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: ['A', 'B', 'C'],
            isOrdered: false,
        }
    }

    render() {

        const { isOrdered, arr } = this.state
        const list = arr.map((item, index) => <li className='itemListInputSubmit' key={index}>{item}</li>)

        return (
            <div className='startLeft'>
                <h1 className='startCenter'>{this.props.title}</h1>
                {!isOrdered ? <ol>{list}</ol> : isOrdered ? <ul>{list}</ul> : ''}
                <span >
                    Создайте компонент «List», который принимает в props два значения: массив строк, и
                    параметр isOrdered. Если значение isOrdered true, то массив строк должен отображаться
                    как упорядоченный список (ol), если false, то как неупорядоченный (ul).
                    Сделайте две отдельных версии. Одна должна быть функциональным компонентом,
                    другая – классовым.
                </span>
            </div>
        )
    }
}

export default ListCC;