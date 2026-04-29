import { Link } from "react-router-dom";
import { navbarStyles } from "./navbar.style";

function Navbar() {
    return (
        
        <nav className={navbarStyles.nav}>
            <div className={navbarStyles.container}>

                {/* Logo / Title */}
                <h1 className={navbarStyles.logo}>
                    TrackWise
                </h1>

                {/* Navigation Links */}
                <div className={navbarStyles.linksWrapper}>

                    <Link to="/department" className={navbarStyles.link}>
                        Departments
                        <span className={navbarStyles.linkUnderline}></span>
                    </Link>

                    <Link to="/employee" className={navbarStyles.link}>
                        Employees
                        <span className={navbarStyles.linkUnderline}></span>
                    </Link>

                    <Link to="/task" className={navbarStyles.link}>
                        Tasks
                        <span className={navbarStyles.linkUnderline}></span>
                    </Link>

                </div>

            </div>
        </nav>
        
    );
}

export default Navbar;