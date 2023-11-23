export interface AdminTabTitleProps {
  tabKey: number;
  title: string;
  icon?: React.ReactNode;
  setSelectedTab: (value: number) => void;
}

export const AdminTabTitle: React.FC<AdminTabTitleProps> = ({
  tabKey,
  title,
  icon,
  setSelectedTab,
}) => {
  const handleChangeOfTab = () => {
    setSelectedTab(tabKey);
  };
  return (
    <li>
      <button onClick={handleChangeOfTab}>
        {icon} {title}
      </button>
    </li>
  );
};
