import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default function Layout({ children }) {
    return (
        <div className="flex">
            <div>
                <SidebarComponent />
            </div>
            <div className="w-full h-screen">
                <NavbarComponent />
                {children}
            </div>
        </div>
    )

}