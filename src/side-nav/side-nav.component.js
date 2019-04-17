import React, { Component } from 'react'
import Link from './link.component';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './side-nav.css';

library.add(faBars)

export default class SideNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleBarClick = this.handleBarClick.bind(this);
    }
    generateLinks(links) {
        if (!links)
            return '';

        return links.map((link, index) => <Link copy={link.copy} url={link.url} key={index + link.copy} />);
    }

    handleBarClick(flag) {
        this.setState({
            open: flag
        })
    }

    render() {
        return (
            <div className={'sideNavContainer '}>
                <div className="sideNavOpenButton" onClick={() => this.handleBarClick(true)}>
                    <FontAwesomeIcon icon="bars" />
                </div>
                <div className={'sideNavInner ' + (this.state.open ? 'open' : '')}>
                    <div className="sideNavCloseButton" onClick={() => this.handleBarClick(false)}>
                        <FontAwesomeIcon icon="bars" />
                    </div>

                    {this.generateLinks(this.props.links)}
                </div>

            </div>
        )
    }
}
