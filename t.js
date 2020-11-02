const inputData = [
  {
    id: 1,
    title: 'hippo',
    faveFood: 'carrots',
  },
  {
    id: 2,
    title: 'Cat',
    faveFood: 'carrots',
  },
  {
    id: 3,
    title: 'ducks',
    faveFood: 'breadcrumbs',
  },
];

const findAnimal = function (favorite) {
  console.log(favorite);

  inputData.map((cv, i) => {
    if (cv.title === favorite) {
      console.log(favorite);
      console.log(cv);
      return cv;
    }
  });
};

console.log(findAnimal('hippo'));
