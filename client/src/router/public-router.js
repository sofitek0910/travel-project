import Registration from '../components/auth/Registration';

const PublicRoutes = [
    {
        path: '/login',
        name: "Dashboard",
        component: Registration,
        layout: "/auth"
    }
];

export default PublicRoutes;