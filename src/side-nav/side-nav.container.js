import React, { Component } from 'react'
import SideNavComponent from './side-nav.component';

export default class SideNavContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nav: {
                elements: [
                    {
                        copy: 'Account',
                        url: ''
                    },
                    {
                        copy: 'Logout',
                        url: ''
                    },
                    {
                        copy: 'Blog',
                        url: ''
                    },
                ]
            }
        }
    }
    render() {
        return (
            <SideNavComponent links={this.state.nav.elements}></SideNavComponent>
        )
    }
}
