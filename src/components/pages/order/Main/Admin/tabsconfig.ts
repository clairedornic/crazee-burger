export const tabsConfig = [
  {
    label:"",
    Icon: isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
    onClick: () => setIsCollapsed(!isCollapsed),
    className: !isCollapsed ? "is-active" : "",
  },
];
