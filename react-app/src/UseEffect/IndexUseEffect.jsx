import Logging from "./Logging";
import Interval from "./Interval";
import FetchApi from "./FetchApi";
import SearchBox from "./SearchBox";

export default function IndexUseEffect() {
  return (
    <div>
      <Logging />
      <Interval />
      <FetchApi />
      <SearchBox />
    </div>
  );
}
