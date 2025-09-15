type AnnouncementBarItemProps = {
  icon: string;
  text: string;
};

const AnnouncementBarItem = ({ icon, text }: AnnouncementBarItemProps) => (
  <span className="mx-8 inline-flex space-x-2 text-lg tracking-wider">
    <img src={icon} alt="Promo Banner" width={20} height={20} />
    <span className="text-sm tracking-[1.5px]">{text}</span>
  </span>
);

export { AnnouncementBarItem };
