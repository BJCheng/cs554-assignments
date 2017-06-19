import React from 'react';
import style from './style.css'

export default class contact extends React.Component {
    constructor() {
        super();
        this.toggleClass = this.toggleClass.bind(this);
    }

    componentWillMount() {
        let data = this.props.data;
        var cardTexts = [];

        let i = 0;
        for (let attr in data) {
            i = i + 1;
            if (data.hasOwnProperty(attr)) {
                if (['id', 'first_name', 'last_name', 'company'].includes(attr))
                    continue;

                let cardText;
                if (data[attr] && data[attr].indexOf('https://') > -1)
                    cardText = <a key={`${this.props.data.id}_${i}`} className="card-text" href="#">{data[attr]}</a>;
                else
                    cardText = <p key={`${this.props.data.id}_${i}`} className="card-text">{data[attr]}</p>;
                cardTexts.push(cardText);
            }
        }
        this.setState({ cardTexts });
    }

    render() {
        return (
            <div className="col-sm-6 col-md-4 col-xl-3 mb-3">
                <div className="card">
                    <div className="card-header">
                        <h1 className="card-title">{`${this.props.data.first_name} ${this.props.data.last_name}`}</h1>
                        <h2 className="card-subtitle text-muted mb-3">{(this.props.data.company) ? this.props.data.company : '---'}</h2>
                        <a className="btn btn-primary" data-toggle="collapse" href={`#${this.props.data.first_name}-${this.props.data.last_name}`} aria-expanded="false" aria-controls={`${this.props.data.first_name}-${this.props.data.last_name}`} >Show Detail</a>
                    </div>
                    <div className="collapse card-block" id={`${this.props.data.first_name}-${this.props.data.last_name}`}>
                        {this.state.cardTexts}
                    </div>
                </div>
            </div>
        );
    }

    toggleClass() {
        let cardBlock = document.getElementById(`${this.props.data.first_name}-${this.props.data.last_name}`);
        let className = cardBlock.className;
        if (className.indexOf('card-block') > -1) {
            cardBlock.className.replace('card-block', '');
        } else {
            cardBlock.className += " card-block";
        }
    }
}