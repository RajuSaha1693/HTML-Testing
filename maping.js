const xyz = {
  XYZ: "data 1",
  ABC: "data 22",
  KERI: "Feri data",
  PERI: "Peri Data",
  limit: "limiting0",
  ded: "deductable",
};

const data = [
  {
    limit: "yes data",
    ded: "data two",
    covers: [
      {
        kind: "KERI",
        code: "KA",
      },
      {
        kind: "PERI",
        code: "PA",
      },
    ],
  },
  {
    limit: "no data",
    ded: "data one",
  },
];

const cms = [
  {
    limit: "yes data",
    ded: "data two",
    KERI: "KA",
    PERI: "PA",
  },
  {
    limit: "no data",
    ded: "data one",
  },
];

const convertedData = data.map((obj) => {
  if (obj.covers) {
    const newObj = { ...obj };
    obj.covers.forEach((cover) => {
      newObj[cover.kind] = cover.code;
    });
    delete newObj.covers;
    return newObj;
  }
  return obj;
});
console.log(convertedData);
