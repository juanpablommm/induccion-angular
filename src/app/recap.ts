const username: string = 'juan carlos';

const sum = (numero1: number, numero2: number): number => {
  return numero1 + numero2;
}


/** cuando trabajamos con angulkar se emplea la programacion
 * orientada aa objectos, por lo qhe cada coponete basicamente va atener
 * su clase
*/

class Persona{

  /**typescript nos prove de una comodida a la hora de trabajar con clases y
   * es que podemos evitarnos el tener que declarar los atributos e inicializarlos en
   * el constructor, todo esto lo podemos hacer solo en el contructor y
   * typescript  automaticamente ahra la declaracion de esos atributos sin que nosotros
   * lo veamos
   */

  constructor(public ega: number, private lastname: string){

  }
}

const persona = new Persona(34, "juan pablo");
console.log(persona.ega);
