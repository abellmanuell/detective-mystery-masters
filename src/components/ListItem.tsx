const ListItem = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={icon} alt={label} width={20} height={20} />
      <p>{label}</p>
    </div>
  );
};

export { ListItem };
