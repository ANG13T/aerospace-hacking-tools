import Dashboard from "layouts/dashboard";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/",
    icon: "🚀",
    component: Dashboard,
    noCollapse: true,
  }
];

export default routes;
