/**
 * Classe que representa as variáveis de ambiente do App
 *
 * @class Environment
 */
var Environment = class Environment {

  /**
   * Inicializa classe Environment
   * @constructor
   * @param {Object} variables - Variáveis de ambiente
   */
  constructor(variables) {
    /**
     * @default
     */
    this._variables = {
      'ENV': Environment.DEVELOPMENT
    };

    for (const variable in variables) {
      this.set(variable, variables[variable]);
    }
  }

  /**
   * Atribui uma variável de ambiente
   * @param {String} key   - Chave
   * @param {String} value - Valor
   */
  set(key, value) {
    this._variables[key] = value;
  }

  /**
   * Obtém uma variável de ambiente
   * @return {String} key
   */
  get(key) {
    return this._variables[key];
  }

  /**
   * Valor padrão para o ENV de produção
   * @static
   */
  static get PRODUCTION() {
    return 1;
  }

  /**
   * Valor padrão para o ENV de desenvolvimento
   * @static
   */
  static get DEVELOPMENT() {
    return 2;
  }

  /**
   * Verifica se o ambiente atual é o de produção
   * @return {Boolean}
   */
  isProduction() {
    return this.get('ENV') == Environment.PRODUCTION;
  }

}