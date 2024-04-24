import { useState } from "react";

function EventActions() {
  const [value, setValue] = useState("");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //onChange eventi kullanmak için React.ChangeEvent<HTMLInputElement> tipi kullanılır.
    setValue(event.target.value);
  };
  return (
    <div>
      {/* button elementinde event tipi React.MouseEvent<HTMLButtonElement>'e karşılık gelir.  */}
      <button onClick={(event) => handleClick(event, 4)}> Sil</button>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default EventActions;
