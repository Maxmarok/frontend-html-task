import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            activeRoute: null
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
        this.setState(() => ({ activeRoute: path }));
    };

    render() {
        const { isOpened, activeRoute } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });

        const routeActive = (path) => {
            return activeRoute === path ? 'active' : ''
        }
        return (
            <div className={ containerClassnames }>
                <div className='sidebar-logo_container'>
                    <img
                        src={ logo }
                        alt="TensorFlow logo"
                        className='sidebar-logo'
                    />
                    <span>TensorFlow</span>

                    <div className='sidebar-arrow'>
                        <button onClick={ this.toggleSidebar }>
                            <FontAwesomeIcon icon='angle-right'/>
                        </button>
                    </div>
                </div>

                <div className='sidebar-items'>
                    {
                        routes.map((route) => (
                            
                            <div key={ route.title } onClick={ () => this.goToRoute(route.path) } className={routeActive(route.path)}>
                                <FontAwesomeIcon icon={ route.icon } />
                                <span>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>

                <div className='sidebar-items bottom'>
                    {
                        bottomRoutes.map((route) => (
                            <div key={ route.title } onClick={ () => this.goToRoute(route.path) } className={routeActive(route.path)}>
                                <FontAwesomeIcon icon={ route.icon } />
                                <span>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
