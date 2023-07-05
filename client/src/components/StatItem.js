import Wrapper from "../assets/wrappers/StatItem";

const StatItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <div className="count">{count}</div>
        <div className="icon">{icon}</div>
      </header>
      <div className="title">{title}</div>
    </Wrapper>
  );
};

export default StatItem;
