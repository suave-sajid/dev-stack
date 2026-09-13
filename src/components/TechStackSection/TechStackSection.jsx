import React, { Suspense } from "react";
import TechStackList from "./TechStackList";
import { BRAND_GRADIENT } from "../../App";
import ErrorBoundary from "../ErrorBoundary";

const TechStackSection = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl text-center font-extrabold leading-tight my-2 mx-6">
        Explore the{" "}
        <span className={`${BRAND_GRADIENT} bg-clip-text text-transparent`}>
          Technologies
        </span>
      </h1>
      <p className="text-xl text-gray-500 text-center mb-10 mx-6 ">
        Pick one technology per catagory to build your ideal stack
      </p>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          <TechStackList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default TechStackSection;
