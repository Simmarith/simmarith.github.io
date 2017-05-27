import React, { Component } from 'react';
import './App.css';
import trelloLogo from './images/trelloViewer.png';
import uberhacker from './images/uberhacker.png';
import downArrow from './images/downArrow.jpg';

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: 'For the web - and the lulz'
        }
    }

    render() {
        return (
        <div className = "App">
            <Header title = { this.state.title }/>
            <Body />
        </div>
        );
    }
}

function Header(props) {
    return (
        <div className = "Header">
            <h1>{props.title}</h1>
            <ScrollButton />
        </div>
    );
}

class ScrollButton extends Component {
    constructor() {
        super();
        this.state = {
            hasScrolled: false
        }
    }
    
    scroll() {
        document.getElementsByClassName("Projects")[0].scrollIntoView(true);
        this.setState({hasScrolled: true});
    }
    
    render() {
        if (!this.state.hasScrolled) {
            return(
                <img src={downArrow} alt="scroll down" className="ScrollButton" onClick={() => {this.scroll();}}/>
            );
        }
        return null;
    }
}

function Body() {
    return (
        <div className = "Body">
            <Projects />
        </div>
    );
}

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    name: 'TrelloViewer',
                    img: trelloLogo,
                    desc: 'The overcomplicated Trello Dashboard',
                    link: 'https://github.com/munichmakerlab/trelloViewer'
                },
                {
                    name: 'uberhacker',
                    img: uberhacker,
                    desc: '"Hack" together - or against each other',
                    link: 'https://github.com/Simmarith/uberhacker'
                }
                ]
        }
    }
    
    render() {
        let projects = [];
        this.state.projects.forEach((project) => {
            projects.push(<Project proj={project} />);
        });
        
        return (
            <div className = "Projects">{projects}</div>
        );
    }
}

function Project(props) {
    return(
        <div className = "Project" onClick={() => { window.history.pushState({}, 'Simmarith\'s Homepage', ''); window.location.replace(props.proj.link)}}>
            <img src={ props.proj.img } alt="trelloViewer"></img>
            <h2>{ props.proj.name }</h2>
            <span>{ props.proj.desc }</span>
        </div>
    );
}

export default App;
