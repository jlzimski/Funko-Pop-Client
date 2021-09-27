// import React, { Component } from 'react';

// export default class Card extends Component {
//     render() {
//         console.log(this.props.film);
//         let film = this.props.film.map((film) => {
//             return (
//                 <div className="card col-md-6" style={{ width: '20rem' }} key={film.id}>
//                     <img className="card-img-top w-100" src="../studioGhibliWorld.jpg" alt="" />
//                     <div className="card-block">
//                         <h2 className="card-title">{film.title}</h2>
//                         <p className="card-text">{film.description.substring(0, 350)}</p>
//                     </div>
//                     <ul className="list-group list-group-flush">
//                         <li className="list-group-item">{film.director}</li>
//                         <li className="list-group-item">{film.producer}</li>
//                         <li className="list-group-item">{film.release_date}</li>
//                     </ul>
//                 </div>
//             )
//         })
//         return (
//             <div className="row p-1">
//                 {film}
//             </div>
//         )

//     }
// }

import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        console.log(this.props.item);
        let item = this.props.item.map((item) => {
            return (
                <div className="card col-md-6" style={{ width: '20rem' }} key={item.id}>
                    <img className="card-img-top w-100" src="../studioGhibliWorld.jpg" alt="" />
                    <div className="card-block">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-text">{item.description.substring(0, 350)}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{item.image}</li>
                        <li className="list-group-item">{item.series}</li>
                    </ul>
                </div>
            )
        })
        return (
            <div className="row p-1">
                {item}
            </div>
        )

    }
}