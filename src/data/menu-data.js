const menu_data = [
    {
        id: 1,
        mega_menu: false,
        has_dropdown: false,
        title: "Home",
        link: "/home-two",
        sub_menus: [
            
        ],
    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: false,
        title: "About",
        link: "/about-us",
    },
    {
        id: 3,
        mega_menu: false,
        has_dropdown: true,
        title: "Services",
        link: "#",
        sub_menus: [
            { link: "/services", title: "Our-Oervice" },
            { link: "/services-details", title: "Service-Details" },
        ],
    },
    {
        id: 4,
        mega_menu: false,
        has_dropdown: true,
        title: "Pages",
        link: "#",
        sub_menus: [
            { link: "/pricing", title: "Pricing" },
            { link: "/team", title: "Our Team" },
            { link: "/faq", title: "Faq" },
            { link: "/not-found", title: "4o4 Page" },
        ],
    },
    {
        id: 5,
        mega_menu: false,
        has_dropdown: true,
        title: "Shop",
        link: "#",
        sub_menus: [
            { link: "/shop", title: "Our-Shop" },
            { link: "/shop-details", title: "Shop Details" },
        ],
    },
    {
        id: 6,
        mega_menu: false,
        has_dropdown: true,
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "/blog-grid", title: "Blog-Grid" },
            { link: "/blog", title: "Blog-Standard" },
            { link: "/blog-details", title: "Blog-Details" },
        ],
    },
    {
        id: 7,
        mega_menu: false,
        has_dropdown: false,
        title: "Contact Us",
        link: "/contact",
    },
];
export default menu_data;


