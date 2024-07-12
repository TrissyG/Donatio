interface BottomNavbarProps {}

const BottomNavbar = ({}: BottomNavbarProps) => {
  return (
    <nav className="bg-donatio-black">
      <div className="flex items-center justify-between rounded-xl">
        <div>Explore</div>
        <div>Challenges</div>
        <div>Profile</div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
