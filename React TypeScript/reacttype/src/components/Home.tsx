import { DataComing } from "./propstypes";

// type DataComing = {
//   // propsları kullanmak için type'da property oolarak tanımlamalıyız.
//   name: string;
//   courseNumber: number;
//   isBest: boolean;
// };

function Home(props: DataComing) {
  return (
    <div>
      {props.name} eğitimine hoşgeldiniz. Kurs sayısı: {props.courseNumber}
      {props.isBest ? (
        <p> En iyi React Eğitimi bu eğitim</p>
      ) : (
        <p> En iyi React Eğitimi bu eğitim değil ileride bu eğitim</p>
      )}
    </div>
  );
}

export default Home;
