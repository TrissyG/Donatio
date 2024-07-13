interface StatusBarProps {}

const StatusBar = ({}: StatusBarProps) => {
  return (
    <div className="flex justify-between items-center">
      <div>Streak</div>
      <div>Donatio Logo</div>
      <div>Donut Currency</div>
    </div>
  );
};

export default StatusBar;
