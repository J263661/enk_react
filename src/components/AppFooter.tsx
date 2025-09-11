import {  Link } from "react-router-dom";
import { useSidebar } from "../components/themes/SidebarContext";
import React, { useState ,useEffect,useRef} from "react";

const AppFooter: React.FC = () => {
      const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
    
      const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

      const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };
  
  return (
      <footer className="fixed dark:border-gray-800 dark:bg-gray-900 border-t-2">
                <p>© 2025 ENK Technology Pvt. Ltd.</p>
      </footer>
  );
}
export default AppFooter;
