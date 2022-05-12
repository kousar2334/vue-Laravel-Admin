import config from "../config";
export default [
    {
        _name: "CSidebarNav",
        permission: config.permissions.dashboard,
        _children: [
            {
                _name: "CSidebarNavItem",
                name: "Dashboard",
                to: "/dashboard",
                icon: "cil-speedometer",
                permission: config.permissions.dashboard
            },
            {
                _name: "CSidebarNavItem",
                name: "Colors",
                to: "/colors",
                icon: "cil-drop",
                permission: config.permissions.colors
            },
            {
                _name: "CSidebarNavDropdown",
                name: "Pages",
                icon: "cil-star",
                permission: config.permissions.pages,
                items: [
                    {
                        name: "Register",
                        to: "/register",
                        permission: config.permissions.register
                    }
                ]
            },
            {
                _name: "CSidebarNavItem",
                name: "Users",
                icon: "cil-people",
                to: "/users",
                permission: config.permissions.users
            },
            {
                _name: "CSidebarNavItem",
                name: "Manage Account",
                icon: "cil-user",
                to: "/manage-account",
                permission: config.permissions.profile
            }
        ]
    }
];
