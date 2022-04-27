const utlis = {
  // processIdOrName: (param, data) => {
  //   let index = [];
  //   if (isNaN(param)) {
  //     data.forEach((item, i) => {
  //       if (item.title.toLowerCase() === param.toLowerCase()) {
  //         index.push(i);
  //       }
  //     });
  //   } else {
  //     data.forEach((item, i) => {
  //       if (Number(item.id) === Number(param)) {
  //         index.push(i);
  //       }
  //     });
  //   }
  //   return index;
  // },
  processIdOrName: (param) => {
    if (isNaN(param)) {
      return false;
      // data.forEach((item, i) => {
      //   if (item.title.toLowerCase() === param.toLowerCase()) {
      //     index.push(i);
      //   }
      // });
    } else {
      return true;
      // data.forEach((item, i) => {
      //   if (Number(item.id) === Number(param)) {
      //     index.push(i);
      //   }
      // });
    }
    // return index;
  },
};

module.exports = utlis;
