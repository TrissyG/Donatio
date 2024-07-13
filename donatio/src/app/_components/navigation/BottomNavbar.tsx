interface BottomNavbarProps {}

const BottomNavbar = ({}: BottomNavbarProps) => {
  return (
    <nav className="rounded-[58px] w-[413px] h-[72px] bg-white">
      <div className="flex items-center justify-around rounded-xl">
        <div>Explore</div>
        <div>Challenges</div>
        <div>Profile</div>
        <div>Hello</div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
