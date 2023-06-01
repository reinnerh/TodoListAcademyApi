const { db } = require("../core/database");

class ItemsService {
  static async findAll() {
    return await db.Item.findAll();
  }
  static async create({ title, description }) {
    return await db.Item.create({ title, description });
  }
  static async find(id) {
    return await db.Item.findByPk(id);
  }
  static async update({ id, ...body }) {
    return await db.Item.update(
      { ...body },
      {
        where: {
          id,
        },
      }
    );
  }
  static async delete(query) {
    return await db.Item.destroy({
      where: {
        ...query,
      },
    });
  }
}
module.exports = { ItemsService };
