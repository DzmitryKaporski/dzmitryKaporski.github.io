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
        const List = arr.map((item, index) => <li key={index}>{item}</li>)

        return (
            <div>
                {!isOrdered ? <ol>{List}</ol> : isOrdered ? <ul>{List}</ul> : ''}
            </div>
        )
    }
}

export default ListCC;
