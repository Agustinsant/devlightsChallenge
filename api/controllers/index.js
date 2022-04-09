const data = require("../utils/deals.json");

module.exports.getDeals = async (req, res) => {
  let equals, contains, morThan, lessThan;
  const { q } = req.query;
  if (
    !q.includes(":") &&
    !q.includes("=") &&
    !q.includes("<") &&
    !q.includes(">")
  )
    contains = q.trim();

  const qArray = q.split(",").map((el) => el.trim());

  qArray.forEach((element) => {
    if (element.includes("title =")) {
      equals = element.split("=")[1].trim();
    }
    if (element.includes("title :")) {
      contains = element.split(":")[1].trim().toLowerCase();
    }
    if (element.includes("salePrice >")) {
      morThan = parseFloat(element.split(">")[1].trim());
    }
    if (element.includes("salePrice <")) {
      lessThan = parseFloat(element.split("<")[1].trim());
    }
  });

  const pattern = new RegExp("^((?!" + contains + ").)*$");

  
  if (equals && lessThan && morThan) {
    const filteredData = data.filter(
      (el) =>
        el.title === equals && el.salePrice < lessThan && el.salePrice > morThan
    );
    return res.send(filteredData);
  }

  if (equals && lessThan) {
    const filteredData = data.filter(
      (el) => el.title === equals && el.salePrice < lessThan
    );
    return res.send(filteredData);
  }

  if (equals && morThan) {
    const filteredData = data.filter(
      (el) => el.title === equals && el.salePrice > morThan
    );
    return res.send(filteredData);
  }

  if (equals) {
    const filteredData = data.filter((el) => el.title === equals);
    return res.send(filteredData);
  }

  if (contains && lessThan && morThan) {
    const filteredData = data.filter(
      (el) =>
        pattern.test(el.title.toLowerCase()) === false &&
        parseFloat(el.salePrice) < lessThan &&
        parseFloat(el.salePrice) > morThan
    );
    return res.send(filteredData);
  }

  if (contains && lessThan) {
    const filteredData = data.filter(
      (el) =>
        pattern.test(el.title.toLowerCase()) === false &&
        parseFloat(el.salePrice) < lessThan
    );
    return res.send(filteredData);
  }

  if (contains && morThan) {
    const filteredData = data.filter(
      (el) =>
        pattern.test(el.title.toLowerCase()) === false &&
        parseFloat(el.salePrice) > morThan
    );
    return res.send(filteredData);
  }

  if (contains) {
    const filteredData = data.filter(
      (el) => pattern.test(el.title.toLowerCase()) === false
    );
    return res.send(filteredData);
  }

  else {
    return res.send([]);
  }
};
