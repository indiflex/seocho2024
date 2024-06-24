import { useState } from "react";
// import { flushSync } from "react-dom";
import "./App.css";
import Hello from "./components/Hello";
import My from "./components/My";

// mock
const SampleSession = {
  loginUser: { id: 1, name: "Hong", age: 33 },
  // loginUser: null,
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

function App() {
  const [session, setSession] = useState(SampleSession);
  const [count, setCount] = useState(0);
  // const [didLogin, setDidLogin] = useState(true);
  const plusCount = () => setCount((count) => count + 1);
  // const plusCount = () => setCount((curr) => curr + 1);

  // console.log('Appppppppppppp!', count)

  // const toggleLogin = () => {
  //   setDidLogin(!didLogin);
  // }

  const logout = () => setSession({ ...session, loginUser: null });

  const login = (name) => {
    const loginUser = session.loginUser;
    setSession({ ...session, loginUser: { ...loginUser, name } });
  };

  return (
    <>
      <div>
        {session.loginUser && (
          <Hello
            name={session.loginUser.name}
            age={session.loginUser.age}
            plusCount={plusCount}
          />
        )}
      </div>
      {/* <button onClick={toggleLogin}>
        Toggle {session.loginUser ? 'Logined' : 'NotLogined'}
      </button> */}

      <My session={session} signOut={logout} signIn={login} />
      <div className="card">
        <button
          onClick={() => {
            setCount((pre) => pre + 1);
            // flushSync(() => setCount((count) => count + 1));
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
