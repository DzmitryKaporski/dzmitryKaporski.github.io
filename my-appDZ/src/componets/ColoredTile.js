import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textColorBlack: true,
            textColorRed: false,
            textColorGreen: false,
        };
    }

    clickHandlerBlack = () => {
        this.setState({
            textColorBlack: true,
            textColorRed: false,
            textColorGreen: false,
        })
    }

    clickHandlerRed = () => {
        this.setState({
            textColorBlack: false,
            textColorRed: true,
            textColorGreen: false,
        })
    }

    clickHandlerGreen = () => {
        this.setState({
            textColorBlack: false,
            textColorRed: false,
            textColorGreen: true,
        })
    }

    render() {
        const { classNameBlack, titleButtonBlack } = this.props
        const { classNameRed, titleButtonRed } = this.props
        const { classNameGreen, titleButtonGreen } = this.props

        let textColorBlack = this.state.textColorBlack
        let textColorRed = this.state.textColorRed
        let textColorGreen = this.state.textColorGreen

        return (
            <div>
                <h1 className={textColorBlack === true ? 'textColorBlack' :
                    textColorRed === true ? 'textColorRed' :
                        textColorGreen === true ? 'textColorGreen' : null} >{this.props.title}

                    <button onClick={this.clickHandlerBlack} className={classNameBlack}>{titleButtonBlack}</button>
                    <button onClick={this.clickHandlerRed} className={classNameRed}>{titleButtonRed}</button>
                    <button onClick={this.clickHandlerGreen} className={classNameGreen}>{titleButtonGreen}</button>
                </h1>
            </div >
        )
    }
}

export default Buttons;