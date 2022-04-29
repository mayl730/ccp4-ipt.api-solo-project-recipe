const utlis = {
  processIdOrName: (param) => {
    if (isNaN(param)) {
      return false;
    } else {
      return true;
    }
  },
  recipeObject: (resultBefore) => {
    let resultAfter = [];
    let pushedId = {};
    resultBefore.forEach((data) => {
      if (data.id in pushedId) {
        const index = pushedId[data.id];
        resultAfter[index].ingredients.push(data.ingredient);
      } else {
        const newData = {
          id: data.id,
          title: data.title,
          description: data.description,
          calories: data.calories,
          type: data.type,
          ingredients: [data.ingredient],
        };
        resultAfter.push(newData);
        pushedId[data.id] = resultAfter.length - 1;
      }
    });
    return resultAfter;
  },
  validData: (obj) => {},
};

module.exports = utlis;
