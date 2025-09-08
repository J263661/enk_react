import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import { SidebarProvider, useSidebar } from "./components/themes/SidebarContext";
import { ThemeProvider } from "./components/themes/ThemeContext";
import AppRoutes from "./components/AppRoutes";
import SignUp from "./components/SignUp";

const Layout = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main content */}
       
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin} bg-gray-100 min-h-screen`}
      >
        <AppHeader />
 <div className="p-4 md:p-6 mx-auto max-w-[var(--breakpoint-2xl)] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-auto transition-colors duration-300">
      
        <AppRoutes /> 
      </div>
    </div>
     </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Router>
          <Routes>
               <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<SignUp />} />
                <Route path="/*" element={<Layout />} />
          </Routes>
          </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
