import React from 'react';
import {
    Menu, Button, Icon
} from 'semantic-ui-react';

import CV from '../helpers/CV'

const style = {
    logo: {
        display: 'block',
        width: 48,
        height: 'auto'
    },
    menu: {
        boxShadow: '0px 6px 31px -8px rgba(61,61,61,0.88)',
        zIndex: 1000
    }
}

const Navbar = (props) => (
    <Menu style={style.menu} className="menu-shadow" fixed='top' borderless icon>
        <Menu.Item>
            <img src={CV.document_details.logo} alt="Site logo" style={style.logo} />
        </Menu.Item>

        {/* <Menu.Menu position='right'>
            <Menu.Item
                onClick={props.handleClick}
            >
                <Icon name='bars'/>
            </Menu.Item>
        </Menu.Menu> */}
    </Menu>
);

export default Navbar;