import CircleQuestionIcon from "../../../../../assets/images/circleQuestion.svg"
import SearchIcon from "../../../../../assets/images/search.svg"
import MessageIcon from "../../../../../assets/images/message.svg"
import FilledChevronDown from "../../../../../assets/images/filled-chevron-down.svg"

export default function PaymentsHeader() {
    return (
        <header className="flex items-center gap-4 py-3 border-b border-[#D9D9D9] shadow-sm px-8">
            <div className="flex flex-1">
                <h5 className="leading-5.5 text-sm mr-4">Payments</h5>
                <div className="flex items-center justify-center">
                    <img src={CircleQuestionIcon} className="mr-1.5" alt="How it workss" />
                    <span className="text-xs leading-4 text-off-black">How it works</span>
                </div>
            </div>
            {/* Search Bar */}
            <div className="flex flex-1 rounded-md py-2.5 px-4 bg-search-bg">
                <img src={SearchIcon} alt="Search" className="mr-2" />
                <input className="text-[15px] w-full text-gray outline-none bg-inherit" placeholder="Search features, tutorials, etc." />
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
                <div className="w-10 h-10 rounded-full">
                    <img src={MessageIcon} alt="Messages" />
                </div>
                <div className="w-10 h-10 rounded-full">
                    <img src={FilledChevronDown} alt="Messages" />
                </div>
            </div>
        </header>
    )
}