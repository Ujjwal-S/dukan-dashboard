import { Transaction, columns } from "./Columns"
import { DataTable } from "./DataTable"
import TransactionData from "../../../../../../MOCK_DATA"
import { useEffect, useState } from "react"

function TransactionTable() {
  const [transactionData, setTransactionData] = useState<Transaction[]>([])

  useEffect(() => {
    async function run() {
      const data: Transaction[] = TransactionData;
      
      data.forEach(transaction => {
          const date = new Date(transaction.order_date);
          const day = date.getDate();
          const month = date.toLocaleString('en-In', { month: 'long' });
          const year = date.getFullYear();
          const formatted = `${day} ${month}, ${year}`
          transaction.order_date = formatted;
      })
  
      setTransactionData(data);
    }
    run()
  }, [])

  return (
    <div className="py-3 pb-6">
      <DataTable columns={columns} data={transactionData} />
    </div>
  )
}

export default TransactionTable;