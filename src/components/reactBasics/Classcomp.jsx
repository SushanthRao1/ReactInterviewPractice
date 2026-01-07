import React from 'react';
import Movie from './Funcomp.jsx';
import '../../CSS/Moviecomp.css';


/*function RestOpe(...no) {
    return no.join('-');
}*/

let Arr1 = [4, 5, 8]
let Arr2 = [1, 5, 6, ...Arr1]
console.log(Arr2)
function SpreadOPE(a, b, c, e, f, g) {
    return a * b * c * e * f * g
}

class Classcomp extends React.Component {
    GetALert = () => {
        alert('Hi');
    }
    GetMoviename = (title, login, link) => {
        return (<Movie title={title} login={login} link={link} />
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            Family: [{ title: 'post 1', Description: 'This is Description 1' },
            { title: 'post 2', Description: 'This is Description 2' }],
            age: 20,
            Name: 'Sushanth'
        }
    }

    render() {
        return <div className="DisplyContent">
            {this.GetMoviename(
                'PK',
                'one',
                'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/03/02/896366-pawankalyan-vakeelsaab.jpg'
            )}
            {this.GetMoviename(
                'Prabhas',
                'one',
                'https://images.indianexpress.com/2020/12/Prabhas-in-SALAAR-1200.jpg'
            )}
            {
                this.GetMoviename(
                    'Aj',
                    'one',
                    'https://boldoutline.in/wp-content/uploads/2019/10/Web-Cover-99.jpg')
            }
            {this.state.Name} {this.state.Family[0].title}
            Change Name: { /*RestOpe(' ' + 'a', 'b', 'c', 'd')*/}
            <Class2Fun Name={this.state.Name} />
        </div>

    }
}

class Class2Fun extends React.Component {
    render() {
        return (<div>This is second class componet  {this.props.Name}
            Using Spread function
            {SpreadOPE(...Arr2)}
        </div>
        )
    }

}
/*<input type="button" value="click here" onclick={this.GetALert()} />*/

export default Classcomp;