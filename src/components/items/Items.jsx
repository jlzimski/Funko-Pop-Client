// import React, { Component } from 'react';
// import Card from './Card';

// export default class Films extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             films: []
//         }
//     }
//     componentDidMount() {
//         fetch('https://ghibliapi.herokuapp.com/films')
//             .then(results => {
//                 return results.json();
//             }).then(data => {
//                 let film = data
//                 this.setState({ films: film });
//                 console.log("state", this.state.films)
//             })
//     }
//     render() {
//         return (
//             <div className="container">
//                 <Card film={this.state.films} />
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';
import Card from './Card';

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/items')
            .then(results => {
                return results.json();
            }).then(data => {
                let item = data
                this.setState({ items: item });
                console.log("state", this.state.items)
            })
    }
    render() {
        return (
            <div className="container">
                <Card item={this.state.items} />
            </div>
        )
    }
}