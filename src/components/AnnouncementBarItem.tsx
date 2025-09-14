type AnnouncementBarItemProps = {
  icon: React.ReactNode;
  text: string;
};

const AnnouncementBarItem = ({ icon, text }: AnnouncementBarItemProps) => (
  <span className="mx-8 inline-flex items-center space-x-2 text-lg tracking-wider">
    <span>{icon}</span>
    <span>{text}</span>
  </span>
);

export { AnnouncementBarItem };
