import SearchIcon from "../../../../../assets/images/search.svg"
import DownloadIcon from "../../../../../assets/images/download.svg"
import SortIcon from "../../../../../assets/images/arrow-up-down.svg"

export default function TableHeader({onSearch}: {onSearch: (searchTerm: string) => void}) {
    return (
        <div className="flex items-center justify-between mb-3">
            <div className="py-2.5 px-4 flex gap-2 rounded border border-[#D9D9D9] max-w-fit">
                <img src={SearchIcon} className="select-none" alt="Search" />
                <input placeholder="Search by order ID..." onChange={(e) => onSearch(e.target.value)} className="outline-none" />
            </div>
            <div className="flex gap-3">
                <button className="flex gap-1.5 items-center border border-[#D9D9D9] py-1.5 px-3 rounded">
                    <span>Sort</span>
                    <img src={SortIcon} className="select-none" alt="Sort" />
                </button>
                <button className="py-1.5 px-3 border border-[#D9D9D9] rounded">
                    <img src={DownloadIcon} className="select-none" alt="Download" />
                </button>
            </div>
        </div>
    )
}