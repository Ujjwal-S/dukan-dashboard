import WalletIcon from "../../../../assets/images/wallet.svg"

export default function SideNavFooter() {
    return (
        <div className="flex w-full bg-navbar-secondary rounded px-3 py-1.5 text-white">
            <div className="bg-navbar-active p-1.5 max-w-fit rounded h-fit">
                <img src={WalletIcon} alt="Wallet" />
            </div>
            <div className="flex flex-col ml-3">
                <span className="text-sm opacity-80">Available credits</span>
                <span className="font-medium leading-6">222.10</span>
            </div>
        </div>
    )
}