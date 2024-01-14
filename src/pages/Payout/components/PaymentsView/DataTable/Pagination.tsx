import clsx from "clsx"
import { assemblePages } from "./utils"

export default function Pagination({currPage, totalPage, changePage}: {currPage: number, totalPage: number, changePage: (page: number) => void}) {
    const paginationArray = assemblePages(currPage, totalPage) 

    if (totalPage === 1) {
        return (
            <button className="h-[30px] w-7 rounded text-white font-medium bg-[#146EB4]">1</button>
        )
    }
    return (
        <div className="flex gap-2">
            {paginationArray[0].map(page => {
                return <button key={page} onClick={() => changePage(page)} className={clsx("h-[30px] w-7 rounded", page==currPage && 'text-white font-medium bg-[#146EB4]')}>{page}</button>
            })}
            <div className="relative -bottom-1">{'...'}</div>
            {paginationArray[1].map(page => {
                return <button key={page} onClick={() => changePage(page)} className={clsx("h-[30px] w-7 rounded", page==currPage && 'text-white font-medium bg-[#146EB4]')}>{page}</button>
            })}
        </div>
    )
}