import "./App.css";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import { useState } from "react";

function App() {
  function clickfunction() {
    alert("button click");
  }

  

  return (
    <>
      <div>
        <Button onClick={clickfunction}>Shadcn</Button>

        <Calendar></Calendar>

        
      </div>
    </>
  );
}

export default App;
