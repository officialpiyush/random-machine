import FoodMachine = require("./lib/FoodMachine");

/**
 * @author Piyush Bhangale <bhangalepiyush@gmail.com>
 * @license GNU GPLv3
 * @file Export all classes of the package
 */

export = {
    /**
     * @since 0.1.0
     * @description What version the package is on
     */
    version: require("../package.json").version,

    /**
     * @since 0.5.0
     * @description Class which returns random food images
     */
    FoodMachine,
};
