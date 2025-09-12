import {  Link } from "react-router-dom";
import { useSidebar } from "../components/themes/SidebarContext";
import React, { useState ,useEffect,useRef} from "react";

const AppFooter = () => {
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
      <footer className="fixed bottom-0 left-0 w-full z-[9999] 
             dark:border-gray-800 dark:bg-gray-900 border-t border-gray-600">
                <p>© 2025 ENK Technology Pvt. Ltd.</p>
      </footer>
  );
}
export default AppFooter;
