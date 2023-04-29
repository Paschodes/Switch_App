import React, { createContext, useContext, useState } from 'react'

const UserDataContext = createContext();

const ParentComponent = () => {

    const [user, setUser] = useState("chioma chris");
    const [profesion, setProfesion] = useState("agba coder");

  return (
    //a case where there are 2 values, you make it an object
    <UserDataContext.Provider value={{user, profesion}}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
    </UserDataContext.Provider>
  );
}

function Component2() {
    return (
        <>
        <h1>Component 2</h1>
        <Component3/>
        </>
    );
}

function Component3() {
    const userData = useContext(UserDataContext);
    return (
        <>
        <h1>Component 3</h1>
        <h2>{`Hello ${userData.user} again`}</h2>
        <h3>{userData.profesion}</h3>
        <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
        <h1>Component 4</h1>
        <Component5/>
        </>
    );
}

function Component5() {
    const userData = useContext(UserDataContext);
    return (
        <>
        <h1>Component 5</h1>
        {/* since the value is an object, you acces it this way */}
        <h2>{`Hello ${userData.user} again`}</h2>
        <h3>{userData.profesion}</h3>
        </>
    );
}
export default ParentComponent;