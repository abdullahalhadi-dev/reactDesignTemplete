import Home from '../pages/Home';
import About from '../pages/About'
import Error404 from '../pages/404';

const route_list = [
 
    {
        exact: true,
        path: '/',
        Component: Home,
    },
    {
        exact: true,
        path: '/about',
        Component: About
    },
    {
        exact: true,
        path: '*',
        Component: Error404
    }
]

export default route_list