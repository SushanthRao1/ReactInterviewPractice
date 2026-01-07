import React from 'react';

class Calculator extends React.Component {
    state = {
        A: 10,
        B: 25,
        showResult: false
    };
    ChangeA = (e) => {
        this.setState({
            A: parseInt(e.target.value),
            showResult: false
        })

    }
    ChangeB = (e) => {
        this.setState({
            B: parseInt(e.target.value),
            showResult: false
        })

    }

    /*setShowResult = e => {
        this.setstate({ showResult: true });
    }*/
    setShowResult = e => {
        this.setState(prevState => {
            return { showResult: !prevState.showResult };
        });
    };

    render() {
        const add = this.state.a + this.state.b;
        return <div>State Component <br />
            <input type='text' onChange={this.ChangeA} />
            <input type='text' onChange={this.ChangeB} />
            <input type="Button" value='Result' onClick={this.setShowResult} /> <br />

            {this.state.showResult ? (
                <div> {'A Value' + (this.state.A)} < br />
                    {'B Value  ' + (this.state.B)} < br />
                    {'A+B Value' + add} <br />
                    {'Sub : ' + (this.state.A - this.state.B)}
                </div>)
                : (<div> Click on result  </div>)
            }
        </div>
    }
}

export default Calculator;

