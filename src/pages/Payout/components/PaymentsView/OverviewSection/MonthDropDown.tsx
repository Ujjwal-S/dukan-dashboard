import ChevronDownIcon from "../../../../../assets/images/bold-chevron-down.svg"

// const MonthOptions = [
//   { id: 1, title: 'Last Month' },
//   { id: 2, title: 'This Month' },
// ]

export default function MonthDropDown() {
  return (
    <div className='flex items-center border border-[#D9D9D9] rounded px-3.5 py-1.5 text-[#4D4D4D] text-base cursor-pointer'>
        <div className='mr-2'>Last Month</div>
        <img src={ChevronDownIcon} className='h-4 w-4 invert-[0.6] select-none' alt="Select Month" />
    </div>
  )
}
