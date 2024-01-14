export default function QuickGlance() {
    return (
        <div className="flex gap-5 mb-8">
            <div className="flex-1">
                <Card title="Online orders" data="231" />
            </div>
            <div className="flex-1">
                <Card title="Amount received" data="₹23,92,312.19" />
            </div>
        </div>
    )    
}

function Card({title, data}: {title: string, data: string}) {
    return (
        <div className="w-full shadow-card rounded-lg p-5">
            <h5 className="off-black leading-6 mb-4">{title}</h5>
            <p className="text-[32px] leading-[38px] font-medium">{data}</p>
        </div>
    )
}