const AbstractManager = require("./AbstractManager");

class SmartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "??" });
  }

  findSmartphone(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAllSmartphone() {
    return this.database.query(`select * from  ${this.table}`);
  }
}

module.exports = SmartphoneManager;
