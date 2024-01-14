import StoreLogo from "../../../../assets/images/store-logo.png"
import BoldChevronDown from "../../../../assets/images/bold-chevron-down.svg"

function StoreHeader() {
    return (
        <div className="w-48 flex items-center gap-3 text-white mb-6">
            <img src={StoreLogo} alt="Nishyan Store Logo" className="w-10 h-10 rounded" />
            <div className="flex flex-col flex-1">
                <h3 className="font-medium leading-5">Nishyan</h3>
                <a className="opacity-80 text-xs underline underline-offset-2" href="#">Vist Store</a>
            </div>
            <img src={BoldChevronDown} alt="Down" />
        </div>
    )
}

export default StoreHeader;