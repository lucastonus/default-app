/**
 * Classe abstrata que representa um cron
 *
 * @class AbstractCron
 */
var AbstractCron = class AbstractCron {

  /**
   * Inicializa classe AbstractCron
   * @param {Int} interval - Intervalo em minutos para execução
   * @constructor
   */
  constructor(interval) {
    if (this.constructor.name == 'AbstractCron') {
      throw new Error("Abstract classes can't be instantiated");
    }

    this._interval = parseInt(interval || 0);
  }

  /**
   * Obtém intervalo de execução
   * @return {Int}
   */
  get interval() {
    return this._interval;
  }

  /**
   * Função de execução a ser implementada
   */
  task() {
    throw Error(`Function task() must be implemented on class ${this.constructor.name}`);
  }

  /**
   * Função que executa a task no intervalo definido
   */
  run() {
    if (!this.interval || !((new Date(Date.now()).getMinutes()) % this.interval)) {
      this.task();
    }
  }

}