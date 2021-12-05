import { Route } from "react-router";

const Welcome = () => {
  return (
    <div>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/user">
        <p> Hello, User! </p>
      </Route>
    </div>
  );
};

export default Welcome;
