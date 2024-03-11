import { Link } from "react-router-dom"

const routes = [
    {
        path: '/linear-search',
        title: 'Linear Search',
    },
    {
        path: '/binary-search',
        title: 'Binary Search',
    },
    {
        path: '/sentinel-search',
        title: 'Sentinel Search',
    }
];

const sortRoutes = [
    {
        path: 'bubble-sort',
        title: 'Bubble Sort'
    },
    {
        path: 'insertion-sort',
        title: 'Insertion Sort'
    },
    {
        path: 'quick-sort',
        title: 'Quick Sort'
    }
]

export const Sidebar = () => {
  return (
    <div className="border-r border-gray-800 p-8 min-w-[260px]">
        <h1 className="text-2xl font-bold">Algorithm Viewer</h1>
        <nav className="py-4">
            <h2 className="text-lg mb-2 font-semibold">Search Algorithms</h2>
            <ul>
                {
                    routes.map( ele => {
                    return (<li key={ele.path} className="underline"><Link to={ele.path}>{ele.title}</Link></li>)
                    })
                }
            </ul>
        </nav>
        <nav className="py-4">
            <h2 className="text-lg mb-2 font-semibold">Sorting Algorithms</h2>
            <ul>
                {
                    sortRoutes.map( ele => {
                    return (<li key={ele.path} className="underline"><Link to={ele.path}>{ele.title}</Link></li>)
                    })
                }
            </ul>
        </nav>
    </div>
  )
}
