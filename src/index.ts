/**
 * @author Piyush Bhangale <bhangalepiyush@gmail.com>
 * @license GNU GPLv3
 * @file Export all classes of the package
 */

import CatMachine = require("./lib/CatMachine");
import FoodMachine = require("./lib/FoodMachine");

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

    /**
     * @since 1.0.0
     * @description Class which returns random cute cats
     */
    CatMachine,
};
