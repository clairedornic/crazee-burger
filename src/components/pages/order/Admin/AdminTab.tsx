interface AdminTabsProps {
  title?: string;
  icon: React.ReactNode;
}

export const AdminTab: React.FC<AdminTabsProps> = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};
