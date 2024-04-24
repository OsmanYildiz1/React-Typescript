import { instructorProps } from "./propstypes";

// BURADA TANIMLADIĞIMIZ PROPSU BAŞKA BİR TS DOSYASINA TAŞIYIP EXPORT EDEREK KULLANDIK.

// type instructorProps = {
//   // objenin içine girip tanımlamamız gerekir.
//   instructorNameLastName: {
//     firstName: string;
//     lastName: string;
//   };
// };

function Instructor(props: instructorProps) {
  return (
    <div>
      {props.instructorNameLastName.firstName}{" "}
      {props.instructorNameLastName.lastName}
    </div>
  );
}

export default Instructor;
