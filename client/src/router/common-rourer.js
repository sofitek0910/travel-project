import Landing from "../components/pages/landing/index";
import Destination from "../components/pages/destination/index";
import TourDetail from "../components/pages/destination/tour-detail";
import Blogs from "../components/pages/blog/index";
import BlogDetails from "../components/pages/blog/blog-details";
import Contact from "../components/pages/contact/index";
import Profile from "../components/pages/profile/index";

const commonRouter = [
    {
      path: "/",
      name: "Landing",
      component: Landing,
      layout: "/",
      exact: true
    },
    {
      path: '/destination',
      name: 'Destination',
      component: Destination,
      layout: "/"
    },
    {
      path: '/TourDetail/:id',
      name: 'TourDetail',
      component: TourDetail,
      layout: "/"
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs,
      layout: "/"
    },
    {
      path: '/blog/:id',
      name: 'BlogDetails',
      component: BlogDetails,
      layout: "/"
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      layout: "/"
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      layout: "/"
    }
]

export default commonRouter;