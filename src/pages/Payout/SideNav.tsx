import SideNavFooter from "./components/SideNav/SideNavFooter";
import SideNavMenu from "./components/SideNav/SideNavMenu";
import StoreHeader from "./components/SideNav/StoreHeader";

function SideNav() {
    return (
        <div className="w-56 py-4 px-2 bg-navbar-primary h-screen flex flex-col items-center">
            <StoreHeader />
            <nav className="w-full flex-1 mb-4">
                <SideNavMenu />
            </nav>
            <SideNavFooter />
        </div>
    )
}

export default SideNav;