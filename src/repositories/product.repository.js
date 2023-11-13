const db = require("../db/models");

exports.findAll = async () =>
  await db.Products.findAll({ order: [["id", "DESC"]] });
