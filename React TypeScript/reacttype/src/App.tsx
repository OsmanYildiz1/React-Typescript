import "./App.css";
import ContextExample from "./components/ContextExample";
import EventActions from "./components/EventActions";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import LoginCheck from "./components/LoginCheck";
import ReducerExample from "./components/ReducerExample";
import Request from "./components/Request";
import { ThemeContextProvider } from "./components/ThemeContext";
import UseRefExample from "./components/UseRefExample";

function App() {
  const insructor = {
    firstName: "Can",
    lastName: "Boz",
  };

  const insructorList = [
    {
      firstName: "Can", // arrayin içersine obje oluşturduk
      lastName: "Boz",
    },
    {
      firstName: "Osman",
      lastName: "Yıldız",
    },
    {
      firstName: "Canan",
      lastName: "Boz",
    },
  ];

  return (
    <>
      <div className="App">
        {/* <Home name="Can Boz" courseNumber={25} isBest={true} />
        <Instructor instructorNameLastName={insructor} /> */}
        {/* oluşturdugumuz instructor objesini prop olarak yolladık */}

        {/* <InstructorList instructorNameLastNameList={insructorList} />
        <Request status="success" />
        <EventActions /> */}

        {/* <LoginCheck /> */}

        {/* <ReducerExample />

        <ThemeContextProvider>
          <ContextExample />
        </ThemeContextProvider> */}

        <UseRefExample />
      </div>
    </>
  );
}

export default App;
