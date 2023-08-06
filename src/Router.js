import { useRoutes } from 'react-router-dom';
import Home from './Pages/Home'
import Thaipongal from './Pages/events/Thaipongal';
import ComingSoon from './Pages/comingSoon/ComingSoon';
import Thamilaruvi from './Pages/events/Thamilaruvi';

function Router() {
    return (
        useRoutes([
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/events',
                children: [
                    {
                        path: 'thaipongal',
                        element: <Thaipongal />
                    },
                    {
                        path: 'thamilaruvi',
                        element: <Thamilaruvi />
                    },
                    {
                        path: 'comingSoon',
                        element: <ComingSoon />
                    },
                ]
            },
        ])
    );
}

export default Router;
