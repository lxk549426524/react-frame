import Shopping from 'view/shopping'
import Home from 'view/shopping/home'
import Menu from 'view/shopping/menu'
import Mine from 'view/shopping/mine'

const routes=[
    {
        path:'/shopping',
        component:Shopping,
        children:[
            {
                path:'/shopping/home',
                component:Home
            },
            {
                path:'/shopping/menu',
                component:Menu
            },
            {
                path:'/shopping/mine',
                component:Mine
            }
        ]
    }
]
export default routes