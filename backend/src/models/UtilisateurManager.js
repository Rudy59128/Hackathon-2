const AbstractManager = require("./AbstractManager");

class UtilisateurManager extends AbstractManager {
  constructor() {
    super({ table: "??" });
  }

  findUtilisateur(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAllUtilisateur() {
    return this.database.query(`select * from  ${this.table}`);
  }
}

module.exports = UtilisateurManager;
