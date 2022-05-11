import * as React from "react";
import { Helmet } from "react-helmet";

export const Wrapper: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Mapedia.org - Explore. Learn. Grow.</title>
        <meta
          name="description"
          content={`Mapedia is a learning map built collectively to support learners learn to any topic seamlessly. Follow us, we're launching this summer;)`}
        />
      </Helmet>
      {children}
    </>
  );
};
