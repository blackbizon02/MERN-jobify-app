import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Job from "./Job";
import PageBtnContainer from "./PageBtnContainer";
import Alert from "./Alert";

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    totalJobs,
    page,
    search,
    searchStatus,
    searchType,
    sort,
    showAlert,
  } = useAppContext();

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h5>
        {totalJobs} job{totalJobs > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs?.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {page > 0 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
