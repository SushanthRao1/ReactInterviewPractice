import React from 'react';

/*class Movie extends React.Component {
    render() {
        return (<div class="PK">
            {this.props.title} <img src={this.props.link} />
        </div>
        )
    }
}*/

function Movie(props) {
    return (
        <div className="PK">
            {props.title}  <img src={props.link} alt="pkimage" />
        </div>
    )
}





/* functional component
function Movie(props) {
    return (
            <div class="PK">
                {props.title} <img src={props.link} />
            </div>
    )
}*/

export default Movie;