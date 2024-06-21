import { TopNav } from "components/Navigation/Top";

function Layout({ children }) {
    return (
        <div className="layout">
            <TopNav />
            {children}
        </div>
    );
}

export default Layout;
