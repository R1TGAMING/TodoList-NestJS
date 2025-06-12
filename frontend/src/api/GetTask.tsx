import useFetch from "../hooks/useFetch";
import Task from "../components/Task/Task";

const GetTask = () => {
  const { data, loading, error } = useFetch({
    url: "http://127.0.0.1:3000/todos",
    options: {
      method: "GET",
    },
  });

  if (loading) {
    return (
      <>
        <h2>Wait a minute</h2>
      </>
    );
  }

  if (error) {
    console.error(error);
  }

  return (
    <>
      {data?.map((e, index) => {
        return (
          <Task key={e.id} index={index + 1}>
            {e.task}
          </Task>
        );
      })}
    </>
  );
};

export default GetTask;
