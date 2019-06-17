/**
 * @author Piyush Bhangale <bhangalepiyush@gmail.com>
 * @license GNU GPLv3
 * @file The file where cat machine code lies
 */

 /**
  * @class
  * @desc The CatMachine class which returns random cute cats.
  */
 class CatMachine {
    protected images: string[];

    /**
     * @constructor
     * @desc Constructor of CatMachine class
     */
    constructor() {
        /**
         * @protected
         * @desc Cat Images
         * @since 1.0.0
         */
        this.images = ["https://cataas.com/cat"];
    }

    /**
     * @since 0.5.0
     * @desc Get a random cute cat.
     * @returns {String} - A random cute cat
     */
    public random(): string {
       return this.images[Math.floor(Math.random() * this.images.length)];
    }
}


/**
 * @exports CatMachine
 */
 export = CatMachine;
