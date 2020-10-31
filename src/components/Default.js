import React from "react";

export default function Default({ location }) {
  const { pathname } = location;
  return (
    <div className="font-italic text-center">
      <h1 className="display-1">404</h1>
      <h1>Error</h1>
      <h1>Page not found</h1>
      <h1>
        Your rquest for <span className="text-danger">{pathname} </span>was not
        found
      </h1>
    </div>
  );
}
