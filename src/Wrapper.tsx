import * as React from "react";
import { Helmet } from "react-helmet";

export const Wrapper: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Sci-Map.org</title>
        <meta name="description" content={`Sci-Map becomes Mapedia`} />
      </Helmet>
      {children}
    </>
  );
};
