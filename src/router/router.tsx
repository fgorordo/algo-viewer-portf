import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { BinarySearch, LinearSearch, SentinelSearch } from "../components";
import { BubbleSortPage } from "../pages/BubbleSortPage";
import { InsertionSortPage, QuickSortPage } from "../pages";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path:'linear-search',
                element: <LinearSearch />
            },
            {
                path:'binary-search',
                element: <BinarySearch />
            },
            {
                path:'sentinel-search',
                element: <SentinelSearch />
            },
            {
                path:'bubble-sort',
                element: <BubbleSortPage/>
            },
            {
                path:'insertion-sort',
                element: <InsertionSortPage/>
            },
            {
                path:'quick-sort',
                element: <QuickSortPage />
            }
        ]
    }
])