/**
 * Classe que representa a aplicação
 *
 * @class App
 */
var App = class App {

  /**
   * Inicializa classe App
   * @constructor
   * @param {Environment} env - Variáveis de ambiente
   */
  constructor(env) {
    this._env = env;
  }

  /**
   * Obtém classe que representa as variáveis de ambiente
   * @return {Environment}
   */
  get env() {
    return this._env;
  }

  /**
   * Atribui model
   * @param {SheetModel} model - Modelo que representa dados de uma planilha
   */
  setModel(model) {
    this[model.constructor.name] = model;
  }

}