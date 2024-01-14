import clsx from 'clsx'
import { useState } from "react"
import { SideNavItems, SideNavItemTitle } from "./SideNavItems"

export default function SideNavMenu() {
    const [activeTab, setActiveTab] = useState<SideNavItemTitle>('Payments')

    return (
        <div>
            {
                SideNavItems.map((sideNavItem, index) => (
                    <div onClick={() => setActiveTab(sideNavItem.title)} key={index} className={clsx(
                        "px-4 py-2 w-full text-white flex mb-1 opacity-80 hover:bg-navbar-active cursor-pointer rounded-md",
                        {'bg-navbar-active opacity-100': activeTab === sideNavItem.title}
                    )}>
                        <img src={sideNavItem.imgSrc} alt={sideNavItem.title} />
                        <span className="ml-3 normal-case">{sideNavItem.title}</span>
                    </div>
                ))
            }
        </div>
    )
}