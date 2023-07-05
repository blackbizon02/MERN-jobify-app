import { useAppContext } from "../../context/appContext";
import { Loading, StatsContainer, ChartsContainer } from "../../components";
import { useEffect } from "react";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications?.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
