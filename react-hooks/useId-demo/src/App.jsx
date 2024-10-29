import React, { useEffect, useId } from "react";

const App = () => {
  // Generate unique IDs for each field
  const firstNameId = useId();
  const lastNameId = useId();

  console.log("first nd last name id", firstNameId, lastNameId);

  return (
    <form>
      <div>
        <label htmlFor={firstNameId}>First Name</label>
        <input type="text" id={firstNameId} name="firstName" />
      </div>
      <div>
        <label htmlFor={lastNameId}>Last Name</label>
        <input type="text" id={lastNameId} name="lastName" />
      </div>
    </form>
  );
};

export default App;
