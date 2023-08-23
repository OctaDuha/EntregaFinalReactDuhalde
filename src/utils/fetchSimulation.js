const fetchSimulation = (dataBase, time) => {
  return new Promise((resolver, reject) => {
    setTimeout(() => {
      resolve(dataBase);
      reject(new Error("Ups algo salio mal"));
    }, time);
  });
};

export default fetchSimulation;
