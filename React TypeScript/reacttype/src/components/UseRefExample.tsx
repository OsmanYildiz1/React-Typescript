import React, { useEffect, useRef } from "react";

function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null); // input htmlinputelement oldugundan hataları çözer.
  useEffect(() => {
    inputRef.current?.focus(); // focus otomatik olarak inputa girmeyi sağlar.
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default UseRefExample;
