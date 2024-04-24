// TS dosyası açarak tanımladığımız propları export keywordu ile erişilebilir yaparak istediğimiz componentte import ederek kullanabiliriz.

export type instructorProps = {
  instructorNameLastName: {
    firstName: string;
    lastName: string;
  };
};
export type DataComing = {
  name: string;
  courseNumber: number;
  isBest: boolean;
};
