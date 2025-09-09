import React, { useEffect, useRef, useState, useCallback } from "react";
import {  Link ,useLocation } from "react-router-dom";

import { useSidebar } from "../components/themes/SidebarContext";
import { Icon } from '@iconify/react';

export const Icons = {
  DashboardIcon: <Icon icon="ri:dashboard-line" className="w-4 h-4 " />,
  BoxCubeIcon: <Icon icon="ri:archive-line" className="w-4 h-4" />,
  CalenderIcon: <Icon icon="ri:calendar-line" className="w-4 h-4 " />,
  ChevronDownIcon: <Icon icon="ri:arrow-down-s-line" className="w-4 h-4" />,
  GridIcon: <Icon icon="ri:layout-grid-line" className="w-4 h-4 " />,
  HorizontaLDots: <Icon icon="ri:more-fill" className="w-4 h-4 " />,
  ListIcon: <Icon icon="ri:list-unordered" className="w-4 h-4" />,
  PageIcon: <Icon icon="ri:file-text-line" className="w-4 h-4 " />,
  PieChartIcon: <Icon icon="ri:pie-chart-line" className="w-4 h-4 " />,
  PlugInIcon: <Icon icon="ri:plug-line" className="w-4 h-4 " />,
  TableIcon: <Icon icon="ri:table-line" className="w-4 h-4 " />,
  UserCircleIcon: <Icon icon="ri:user-line" className="w-4 h-4 " />,
};

type NavItem = {
  name: string;
  icon?: React.ReactNode;
  path?: string;
  subItems?: NavItem[];
  pro?: boolean;
  new?: boolean;
};


const navItems: NavItem[] = [
  {
   
    icon: Icons.DashboardIcon,
    name: "Dashboard",
    subItems: [
      { name: "LinkUp Dashboard", path: "/linkup", pro: false },
      { name: "Surf Dashboard", path: "/surf", pro: false },
      { name: "Rivertel Dashboard", path: "/rivertel", pro: false },
      { name: "Wifly Dashboard", path: "/wifly", pro: false },
      { name: "Unidata Dashboard", path: "/unidata", pro: false },
      { name: "Ultra Dashboard", path: "/ultra", pro: false },
      { name: "ATnT Dashboard", path: "/atnt", pro: false },
    ],
  },
  {
     icon: Icons.CalenderIcon,
    name: "Recharge",
    path: "/EmRecharge",
  },
  {
       icon: Icons.UserCircleIcon,
    name: "Account Report",
    path: "/ActivationLedgerReport",
  },
  {
     icon: Icons.ListIcon,
    name: "Reports",
    subItems: [
      { name: "Master RTR Reports", path: "/ActivationLedgerReport", pro: false },
      { name: "Network Commission", path: "/NetworkCommissionReport", pro: false },
      { name: "Promo Ledger Reports", path: "/PromoBalanceTransactionReport", pro: false },
      { name: "Promo Balance Reports", path: "/PromoBalanceReport", pro: false },
      { name: "Dealer Account Balance", path: "/DealerAccountBalance", pro: false },
      { name: "Month End Manual Commission Details", path: "/MonthEndManualCommissionDetails", pro: false },
      { name: "Inventory Purchase Report", path: "/PurchaseReport", pro: false },
      { name: "Commission Reports", path: "/CommissionReport", pro: false },

      {
        name: "Ledger Reports",
        subItems: [
          { name: "Ledger Report", path: "/LedgerReport", pro: false },
          { name: "Topup Report", path: "/TopupReport", pro: false },
          { name: "Deduction Report", path: "/DeductReport", pro: false },
          { name: "Topup Details", path: "/PaymentDetail", pro: false },
        ],
      },

      {
        name: "Other Reports",
        subItems: [
          { name: "Sim History Report", path: "/SimHistoryReport", pro: false },
          { name: "Bundle Renewal with Distributor Report", path: "/ExcelImport", pro: false },
          { name: "Login History Reports", path: "/LoginHistory", pro: false },
          { name: "Subscriber Log Detail", path: "/SubscriberLog", pro: false },
        ],
      },
    ],
  },
  {
    name: "Inventory",
     icon: Icons.TableIcon,
    subItems: [{ name: "Purchase boom sim", path: "/BoomPurchaseSIM", pro: false },
      { name: "Purchase surf sim", path: "/purchaseSurfSim", pro: false },
      { name: "Purchase linkup sim", path: "/LinkUpPurchaseSim", pro: false },
      { name: "Purchase ATnT sim", path: "/ATnTSIMPurchase", pro: false },
       { name: "Surf sim plan mapping", path: "/SurfSimPlanMapping", pro: false },
        { name: "Purchase tmo sim", path: "/TMOPurchaseSIM", pro: false },
         { name: "TMO SIM Inventory", path: "/TmoSimInventory", pro: false },
          { name: "Stock transfer reports", path: "/StockTransferReport", pro: false },
          { name: "TMO SIM plan Mapping", path: "/TMOSimPlanMapping", pro: false },
          { name: "Boom Sim plan Mapping", path: "/BOOMSimPlanMapping", pro: false },
    ],
  },
  {
    name: "Admin",
     icon: Icons.PageIcon,
    subItems: [
      { name: "Surf access", path: "/SurfPageAccess", pro: false },
      { name: "Linkup access", path: "/LinkUpPageAccess", pro: false },
       { name: "Surf order list", path: "/SurfOrderSimReport", pro: false },
        { name: "Tmo month control", path: "/TMOMonthStats", pro: false },
         { name: "Tmo topup", path: "/PromoBalance", pro: false },
          { name: "ApIS logs", path: "/AllPanelTransactionDetails", pro: false },
           { name: "Tmo sim swap price", path: "/TMOSIMSWAPDealerWisePrice", pro: false },
            { name: "Atnt price panel", path: "/ATTLiteDealerWisePlanPrice", pro: false },
             { name: "Plans cost controller", path: "/TMOInstantRegularPlanPricePanel", pro: false },
              { name: "Recharge aggregator", path: "/RechargeAggregator", pro: false },
               { name: "Plans groups", path: "/TariffGroup", pro: false },
                { name: "RTR master", path: "/RechargeDiscountingCarrierWise", pro: false },
                 { name: "Instant preload tg", path: "/BNKIPTG", pro: false },
                  { name: "Ip ports management", path: "/IPPortsManagement", pro: false },
                   { name: "Doc review", path: "/extDocs", pro: false },
                    { name: "Carrier access control", path: "/reqInitiatorStatus", pro: false },
                     { name: "Tmo sim order list", path: "/TMOSIMOrderList", pro: false },
                      { name: "Boom sim order list", path: "/BoomSIMOrderList", pro: false },
                       { name: "Ultra sim order list", path: "/UltraSIMOrderList", pro: false },
                        { name: "W9 process list", path: "/InvalidTaxDetails", pro: false },
                         { name: "Multi month topup list", path: "/BoomMobileMultiRecharge", pro: false },
                          { name: "Seller", path: "/DistributorView", pro: false },
                           { name: "Refund timeout", path: "/RefundTimeOut", pro: false },
                            { name: "Transaction reverse/audit", path: "/TransactionAdjustmentPanel", pro: false },
                             { name: "Paypal bridge transaction", path: "/PaypalAllFailAndPending", pro: false },
                              { name: "Plans list", path: "/Createplans", pro: false },
                               { name: "Manage funds",  
                                 subItems: [
                                { name: " Add Fund", path: "/Addelvnfunds", pro: false },
                                { name: "New Add Funds", path: "/PayPallInbuilt", pro: false },]
                              },
                               { name: "PAYPAL CONTROl/TRANCASTION", path: "/PaypalDistributorRights", pro: false },
                                { name: "Users", path: "/UserList", pro: false },
                                { name: "API Status", path: "/apistatus", pro: false },
                                 { name: "Enk Preloaded Expired Sim List", path: "/EnkPreloadedExpiredSimList", pro: false },
                                ],
                              },
                            ];

const othersItems: NavItem[] = [
  {
     icon: Icons.PieChartIcon,
    name: "Banner",
    subItems: [
      { name: "External banner", path: "/Banner.aspx?ImgFlag=1", pro: false },
      { name: "Internal banner", path: "/Banner.aspx?ImgFlag=2", pro: false },
       { name: "Distributor banner", path: "/InternalBannerLevelWise", pro: false },
        { name: "Tmobile banner", path: "/Banner.aspx?ImgFlag=4", pro: false },
        { name: "Ultra banner", path: "/Banner.aspx?ImgFlag=5", pro: false },
         { name: "Unidata banner", path: "/Banner.aspx?ImgFlag=6", pro: false },
          { name: "Ip banner", path: "/Banner.aspx?ImgFlag=3", pro: false },
           { name: "Boom banner", path: "/Banner.aspx?ImgFlag=7", pro: false },
            { name: "Rivertel banner", path: "/Banner.aspx?ImgFlag=8", pro: false },
              { name: "Surf banner", path: "/Banner.aspx?ImgFlag=9", pro: false },
                { name: "Atnt banner", path: "/Banner.aspx?ImgFlag=10", pro: false },
                  { name: "Wifly banner", path: "/Banner.aspx?ImgFlag=11", pro: false },
                   { name: "Linkup banner", path: "/Banner.aspx?ImgFlag=12", pro: false },
    ],
  },
    {
      icon: Icons.UserCircleIcon,
    // icon: <UserCircleIcon />,
    name: "Emailer",
    path: "/ENKEmailer",
  },
  {
   icon: Icons.BoxCubeIcon,
        name: "Sales reports",
        subItems: [
          { name: "Uploaded sales reports", path: "/SalesPageReport", pro: false },
          { name: "Downloaded sales reports", path: "/SalesReportDownload", pro: false },
          {
            name: "Downloaded sales reports",
            subItems: [
              { name: "Reset password", path: "/Resetpassword", pro: false },
            ],
          },
        ],

  },
  {
   icon: Icons.PlugInIcon,
    name: "HELP",
     path: "/TicketList",
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const pathname =location.pathname;


  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({});
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [subMenuHeights, setSubMenuHeights] = useState<Record<string, number>>({});

  const isActive = useCallback((path?: string) => {
    if (!path) return false;
    return path === pathname;
  }, [pathname]);

  
  const makeKey = (parentKey: string, index: number) => `${parentKey}-${index}`;


  const toggleKey = (key: string, level: number, topLevelRoot: string) => {
    setOpenKeys((prev) => {
      const next = { ...prev };
      if (level === 1) {
       
        Object.keys(next).forEach((k) => {
          if (k.startsWith(topLevelRoot + "-")) {
            delete next[k];
          }
        });
        if (!prev[key]) next[key] = true;
      } else {
        next[key] = !prev[key];
      }
      return next;
    });
  };


  const findKeysForPath = (items: NavItem[], targetPath: string, parentKey: string): string[] | null => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const key = makeKey(parentKey, i);
      if (item.path === targetPath) {
        return [key];
      }
      if (item.subItems) {
        const childChain = findKeysForPath(item.subItems, targetPath, key);
        if (childChain) {
          return [key, ...childChain];
        }
      }
    }
    return null;
  };
  useEffect(() => {
    const keysToOpen: Record<string, boolean> = {};

    const mainChain = pathname ? findKeysForPath(navItems, pathname, "main") : null;
    if (mainChain) mainChain.forEach((k) => (keysToOpen[k] = true));

    const othersChain = pathname ? findKeysForPath(othersItems, pathname, "others") : null;
    if (othersChain) othersChain.forEach((k) => (keysToOpen[k] = true));

    if (Object.keys(keysToOpen).length > 0) {
      setOpenKeys(keysToOpen);
    } else {
      setOpenKeys({});
    }
  }, [pathname]);


  useEffect(() => {
    const openKeyList = Object.keys(openKeys).filter((k) => openKeys[k]);
    if (openKeyList.length === 0) {
      // clear heights when everything closed
      setSubMenuHeights((prev) => {
        const next: Record<string, number> = { ...prev };
        openKeyList.forEach((k) => (next[k] = next[k] || 0));
        return next;
      });
      return;
    }

    // measure in the next frame
    requestAnimationFrame(() => {
      const newHeights: Record<string, number> = {};
      openKeyList.forEach((k) => {
        const el = subMenuRefs.current[k];
        if (el) newHeights[k] = el.scrollHeight;
      });
      setSubMenuHeights((prev) => ({ ...prev, ...newHeights }));
    });
  }, [openKeys]);

  // Recompute heights on window resize to avoid visual break
  useEffect(() => {
    const onResize = () => {
      const opened = Object.keys(openKeys).filter((k) => openKeys[k]);
      const newHeights: Record<string, number> = {};
      opened.forEach((k) => {
        const el = subMenuRefs.current[k];
         if (el) newHeights[k] = el.scrollHeight;
    });
      setSubMenuHeights((prev) => ({ ...prev, ...newHeights }));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [openKeys]);

 const renderMenuItems = (items: NavItem[], menuRoot: "main" | "others", parentKey: string = menuRoot, level = 1) => {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((nav, index) => {
        const key = makeKey(parentKey, index);
        const isOpen = !!openKeys[key];
        const hasChildren = !!(nav.subItems && nav.subItems.length > 0);

        return (
          <li key={key}>
            {hasChildren ? (
              <button
                onClick={() => toggleKey(key, level, menuRoot)}
                className={`menu-item group ${isOpen ? "menu-item-active" : "menu-item-inactive"} cursor-pointer ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}`}
              >
                <span className={`${isOpen ? "menu-item-icon-active" : "menu-item-icon-inactive "}`}>
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text ">{nav.name}</span>}
                {(isExpanded || isHovered || isMobileOpen) && React.cloneElement(Icons.ChevronDownIcon, {
                  className: `ml-auto w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-500" : ""}`,
                })}
              </button>
            ) : (
              nav.path && (
                <Link to={nav.path} className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"}`}>
                  <span className={`${isActive(nav.path) ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}>{nav.icon}</span>
                  {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                </Link>
              )
            )}

            {/* Dropdown items without animation */}
           {hasChildren && (
               <div
                  className={`mt-2 overflow-hidden transition-all duration-300 text-white px-5 ${
                    isOpen ? "max-h-[1000px]" : "max-h-0"
                  } ${level > 1 ? "ml-4 border-l border-gray-200 pl-3" : ""}`}
                >
    {nav.subItems!.map((sub, subIndex) => {
      const childKey = makeKey(key, subIndex);
      const childHasChildren = !!(sub.subItems && sub.subItems.length > 0);

      if (childHasChildren) {
        return (
          <div key={childKey} className="">
            {renderMenuItems([sub], menuRoot, childKey, level + 1)}
          </div>
        );
      }

      return (
        <div key={childKey} className="">
          <Link
            to={sub.path!}
            className={`menu-dropdown-item ${
              isActive(sub.path!) ? "menu-dropdown-item-active" : "menu-dropdown-item-inactive"
            }`}
          >
            {sub.name}
            <span className="flex items-center gap-1 ml-auto">
              {sub.new && <span className="menu-dropdown-badge">new</span>}
              {sub.pro && <span className="menu-dropdown-badge">pro</span>}
            </span>
          </Link>
        </div>
      );
    })}
  </div>
)}
          </li>
        );
      })}
    </ul>
  );
};
  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0  dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200
        ${isExpanded || isMobileOpen ? "w-[250px]" : isHovered ? "w-[250px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      <div className={`py-2 mt-2 flex bg-white justify-center rounded-lg ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-center"}`}>
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img className="dark:hidden" src="../../logo/enk_logo.png" alt="Logo" width={80} height={40} />
              <img className="hidden dark:block" src="../../logo/enk_logo.png" alt="Logo" width={80} height={40} />
            </>
          ) : (
            <img src="../../logo/enk_logo.png" alt="Logo" width={32} height={32} />
          )}
        </Link>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar mt-5">
        <nav className="mb-6">
          <div className="flex flex-col gap-1">
            <div>
              <h2 className={` text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
                {/* {isExpanded || isHovered || isMobileOpen ? "Menu" :'' />} */}
              </h2>
              {renderMenuItems(navItems, "main", "main", 1)}
            </div>

            <div>
              <h2 className={` text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
                {/* {isExpanded || isHovered || isMobileOpen ? "Others" : <HorizontaLDots />} */}
                 {/* {isExpanded || isHovered || isMobileOpen ? "Others" : "vv" />} */}
              </h2>
              {renderMenuItems(othersItems, "others", "others", 1)}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
