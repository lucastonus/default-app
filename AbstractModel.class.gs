/**
 * Classe abstrata que representa os dados de uma planilha
 *
 * @class AbstractModel
 */
var AbstractModel = class AbstractModel {

  /**
   * Inicializa classe AbstractModel
   * @param {String} sheetId - ID da planilha
   * @constructor
   */
  constructor(sheetId) {
    this._sheetName = '';
    this._fields = [];

    if (this.constructor.name == 'AbstractModel') {
      throw new Error("Abstract classes can't be instantiated");
    }

    this._sheet = SpreadsheetApp.openById(sheetId);
  }

  /**
   * Atribui nome da planilha no model
   * @param {String} name - Nome da planilha
   */
  set sheet(name) {
    var sheet = this.sheet.getSheetByName(name);

    if (sheet != null) {
      this._sheet = sheet;
    } else {
      throw Error(`Sheet with name ${name} not found.`);
    }
  }

  /**
   * Obtém Sheet do model
   * @return {Sheet}
   */
  get sheet() {
    return this._sheet;
  }

  /**
   * Atribui nome da planilha e atualiza Sheet
   * @param {String} name - Nome da planilha
   */
  set sheetName(name) {
    this._sheetName = name;
    this.sheet = name;
  }

  /**
   * Obtém nome da planilha
   * @return {String}
   */
  get sheetName() {
    return this._sheetName;
  }

  /**
   * Atribui campos da planilha
   * @param {Array} fields - Colunas da planilha contendo seus aliases
   */
  set fields(fields) {
    var nSheetColumns = this.sheet.getMaxColumns();

    if (nSheetColumns == fields.length) {
      this._fields = fields;
    } else {
      throw Error(`Incompatible number of columns. [${this.constructor.name}:${fields.length}][Sheet${this.sheetName}:${nSheetColumns}]`);
    }
  }

  /**
   * Obtém campos da planilha
   * @return {Array}
   */
  get fields() {
    return this._fields;
  }

  /**
   * Obtém linhas da planilha, desconsiderando o header
   * @return {Array}
   */
  get rows() {
    var parsedRows = [];

    var rows = this.sheet.getDataRange().getValues().slice(1);

    rows.forEach((row) => {
      var parsedRow = {};

      this.fields.forEach((field, index) => {
        parsedRow[field] = row[index];
      });

      parsedRows.push(parsedRow);
    });

    return parsedRows;
  }

}