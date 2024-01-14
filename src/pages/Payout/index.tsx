import PaymentsView from "./PaymentsView";
import SideNav from "./SideNav";

function Payout() {
    return (
        <div className="flex h-screen">
            <SideNav />
            <div className="w-full overflow-y-auto">
                <PaymentsView />
            </div>
        </div>
    )
}

export default Payout;