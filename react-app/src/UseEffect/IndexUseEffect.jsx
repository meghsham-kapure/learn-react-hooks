import Logging from "./Logging";
import Interval from "./Interval";
import FetchApi from "./FetchApi";
import SearchBox from "./SearchBox";

import React from "react";

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
