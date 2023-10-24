const moment = require("moment/moment");

const formatDate = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export default formatDate;
