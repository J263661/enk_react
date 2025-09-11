import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import { SidebarProvider, useSidebar } from "./components/themes/SidebarContext";
import { ThemeProvider } from "./components/themes/ThemeContext";
import AppRoutes from "./components/AppRoutes";
import SignUp from "./components/SignUp";
import AppFooter from "./components/AppFooter";


const Layout = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[250px]"
    : "lg:ml-[90px]";

  return (
    <div className="max-h-screen flex ">
      {/* Sidebar */}

      {/* Main content */}
       
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin} bg-gray-100 `}
      >
      <AppSidebar />

        <AppHeader />
 <div className="flex-1 p-2 md:p-1 mx-auto max-w-[var(--breakpoint-2xl)] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-[91vh] transition-colors duration-300">
      
        <AppRoutes /> 
        
      </div>
      <AppFooter />

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
