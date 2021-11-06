interface gostData {
  name: string,
  title: string,
  status: string,
  dateOfIntroduction: string,
};
const pipes_gosts: gostData[] = [
  {
    name: "ГОСТ 10704-91",
    title: "Трубы стальные электросварные прямошовные",
    status: "Межгосударственный стандарт",
    dateOfIntroduction: "1993-01-01",
  }, 
  {
    name: "ГОСТ 3662-75",
    title: "Трубы стальные водогазопроводные",
    status: "Межгосударственный стандарт",
    dateOfIntroduction: "1977-01-01",
  },
  {
    name: "ГОСТ 8732-78",
    title: "Трубы стальные бесшовные горячедеформированные",
    status: "Межгосударственный стандарт",
    dateOfIntroduction: "1979-01-01",
  },
  {
    name: "ГОСТ 8734-75",
    title: "Трубы стальные бесшовные холоднодеформированные",
    status: "Межгосударственный стандарт",
    dateOfIntroduction: "1977-01-01",
  },
  {
    name: "ГОСТ Р 51737",
    title: "Трубы стальные бесшовные холоднодеформированные",
    status: "Межгосударственный стандарт",
    dateOfIntroduction: "1977-01-01",
  },
];
export default pipes_gosts;