type instructorListType = {
  instructorNameLastNameList: {
    firstName: string;
    lastName: string;
  }[]; // sonuna array oldugunu belirmemiz gerekir.
};
function InstructorList(props: instructorListType) {
  return (
    <div>
      {props.instructorNameLastNameList.map((item) => {
        return (
          // key olarak tanımlı ve benzersiz olan değer girilir.
          <h3 key={item.firstName}>
            {item.firstName} {item.lastName}
          </h3>
        );
      })}
    </div>
  );
}

export default InstructorList;
