import { ColumnDef } from "@tanstack/react-table"
import TriangleDown from "../../../../../assets/images/triangle-down.svg"
import CircleInfo from "../../../../../assets/images/circle-info.svg"
import clsx from "clsx"

export type Transaction = {
    order_id: string,
    order_date: string,
    order_amount: number,
    transaction_fees: number
}

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "order_id",
    header: () => <div className="text-sm font-medium text-off-black mr-10">Order ID</div>,
    cell: (props) => <div className="text-[#146EB4] text-sm font-medium">{props.row.getValue("order_id")}</div>,
    meta: {
      align: 'left',
    },
  },
  {
    accessorKey: "order_date",
    header:  ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center text-sm font-medium text-off-black mr-10"
        >
          Order Date
          <img src={TriangleDown} className={clsx("ml-2 h-3 w-3", column.getIsSorted() === "asc" && 'rotate-180')} alt="Change Sorting" />
        </button>
      )
    },
    cell: (props) => <div className="text-sm">{props.row.getValue("order_date")}</div>,
    meta: {
      align: 'left'
    },
  },
  {
    accessorKey: "order_amount",
    header: () => <div className="text-sm font-medium text-off-black">Order Amount</div>,
    cell: (props) => {
        const amount = parseInt(props.row.getValue('order_amount'));
        
        const inrFormatted = new Intl.NumberFormat("en-In", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(amount)

        return <div className="text-sm">{inrFormatted}</div>
    },
    meta: {
      align: 'right'
    },
  },
  {
    accessorKey: "transaction_fees",
    header: () => {
      return (
        <div className="inline-block">
          <div className="flex items-center gap-1 text-right">
            <div className="text-sm font-medium text-off-blackml-10">Transaction Fees</div>
            <img src={CircleInfo} alt="Info" />
          </div>
        </div>
      )
    },
    cell: (props) => {
        const amount = parseInt(props.row.getValue('transaction_fees'));
        
        const inrFormatted = new Intl.NumberFormat("en-In", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(amount)

        return <div className="text-sm">{inrFormatted}</div>
    },
    meta: {
      align: 'right'
    },
  }
]
