import { useSelector, useDispatch } from "react-redux";
import { testFunction } from "../redux/actions/test";

const test = () => {
  const dispatch = useDispatch();
  const { test } = useSelector((store) => store.test);
  console.log(test);

  const handleChange = () => {
    console.log(test);
    dispatch(testFunction("haii"));
  };

  return (
    <div className="h-screen bg-[#ffff]">
      <div>
        <p>hjhjhjh</p>
        <button onClick={handleChange}>click</button>
      </div>
    </div>
  );
};

export default test;
