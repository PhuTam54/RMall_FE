import config from '~/config';

// Layouts

// Pages
import Home from '~/pages/Home';
import Cinema from '~/pages/Cinema';
import Aboutus from '~/pages/Aboutus';

// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.aboutus, component: Aboutus },
    { path: config.routes.cinema, component: Cinema},
    
];

// Private routes
export const privateRoutes = [];
