import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import ChevronDownIcon from "../../../../../assets/images/bold-chevron-down.svg"
import CheckIcon from "../../../../../assets/images/check-icon.svg"
import clsx from 'clsx'

const MonthOptions = [
  { id: 1, title: 'Last Month' },
  { id: 2, title: 'This Month' },
]

export default function MonthDropDown() {
  const [selected, setSelected] = useState(MonthOptions[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2 w-32">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white text-off-black py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-[#D9D9D9] ring-inset ring-gray-300 focus:outline-none focus:ring-1 focus:ring-navbar-primary sm:text-sm sm:leading-6">
              <span className="block truncate">{selected.title}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <img src={ChevronDownIcon} className="h-4 w-4 invert-[0.6] select-none" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {MonthOptions.map((month) => (
                  <Listbox.Option
                    key={month.id}
                    className={({ active }) =>
                      clsx(
                        active ? 'bg-navbar-primary text-white' : 'text-gray-900',
                        'relative cursor-pointer rounded select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={month}
                  >
                    {({ selected, active }) => (
                      <div className='group'>
                        <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate peer')}>
                          {month.title}
                        </span>

                        {selected ? (
                          <span
                            className={clsx(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <img src={CheckIcon} className={clsx("h-5 w-5 group-hover:invert", active && 'invert')} aria-hidden="true" />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
