import React from 'react';

class ListCC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: ['a', 'b', 'c'],
            isOrdered: true,
        }
    }

    render() {

        const { isOrdered, arr } = this.state
        const list = arr.map((item, index) => <li key={index}>{item}</li>)

        return (
            <div>
                {!isOrdered ? <ol>{list}</ol> : isOrdered ? <ul>{list}</ul> : ''}
            </div>
        )
    }
}

export default ListCC;