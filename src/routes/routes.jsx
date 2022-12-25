import Drivers from "../components/Drivers";
import Favorites from "../components/Favorites";
import NoMatch from "../components/NoMatch";

export const routes=[
    {
        path:"/",
        element:<Drivers/>
    },
    {
        path:"/favotites",
        element:<Favorites/>
    },
    {
        path:"*",
        element:<NoMatch/>
    }
]