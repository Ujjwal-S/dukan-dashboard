import PaymentsHeader from "./components/PaymentsView/Header/PaymentsHeader";
import MonthDropDown from "./components/PaymentsView/OverviewSection/MonthDropDown";
import QuickGlance from "./components/PaymentsView/OverviewSection/QuickGlance";
import TransactionTable from "./components/PaymentsView/DataTable/TransactionTable";

function PaymentsView() {
    return (
        <div className="w-full">
            <PaymentsHeader />
            <div className="px-8">
                <div className="flex items-center justify-between mt-9 mb-6">
                    <span className="text-xl font-medium">Overview</span>
                    <MonthDropDown />
                </div>
                <QuickGlance />
                <h2 className="text-xl font-semibold text-[#1A181E] mb-5">Transactions | This Month</h2>
                <div className="px-3 mt-3 mb-6 shadow-card rounded-lg">
                    <TransactionTable />
                </div>
            </div>
        </div>
    )
}

export default PaymentsView;