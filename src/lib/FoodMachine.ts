/**
 * @author Piyush Bhangale <bhangalepiyush@gmail.com>
 * @license GNU GPLv3
 * @file The file where food machine code lies
 */

 /**
  * @class
  * @desc The FoodMachine class which returns random images of food.
  */
 class FoodMachine {
     protected images: string[];

     /**
      * @constructor
      * @desc Constructor of FoodMachine class
      */
     constructor() {
         /**
          * @protected
          * @desc Food Images
          * @since 0.5.0
          */
         this.images = ["https://officialpiyush.github.io/cdn/food/1.jpg" ,
         "https://officialpiyush.github.io/cdn/food/10227e-food-on-the-table-top-hd-wallpaper.jpg" ,
         "https://officialpiyush.github.io/cdn/food/1521905074_indian-cuisine.jpg" ,
         "https://officialpiyush.github.io/cdn/food/15234-hd-pizza-gourmet.jpg" ,
         "https://officialpiyush.github.io/cdn/food/160929095729-essential-spanish-dish-fideua-brindisa-full-169.jpg" ,
         "https://officialpiyush.github.io/cdn/food/17072.jpg" ,
         "https://officialpiyush.github.io/cdn/food/17423.jpg" ,
         "https://officialpiyush.github.io/cdn/food/174230.jpg" ,
         "https://officialpiyush.github.io/cdn/food/17819.jpg" ,
         "https://officialpiyush.github.io/cdn/food/2-2-food-png-hd.png" ,
         "https://officialpiyush.github.io/cdn/food/22007d89fdb6b178488a2e1024a90fa6.jpg" ,
         "https://officialpiyush.github.io/cdn/food/271833.jpg" ,
         "https://officialpiyush.github.io/cdn/food/402852.jpg" ,
         "https://officialpiyush.github.io/cdn/food/490310-Fries-tomatoes-food-748x499.jpg" ,
         "https://officialpiyush.github.io/cdn/food/7.jpg" ,
         "https://officialpiyush.github.io/cdn/food/85a95bbe13e87321c605a8da6a0d141d.jpg" ,
         "https://officialpiyush.github.io/cdn/food/862638.jpg" ,
         "https://officialpiyush.github.io/cdn/food/862639.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Biriyani.jpg" ,
// tslint:disable-next-line: max-line-length
         "https://officialpiyush.github.io/cdn/food/Blueberry-Fruit-Food-Wallpaper-HD-Desktop-Mobile-Free-7992880884.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Delicious-fast-food-pictures.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Desktop-Food-HD-Wallpapers-Free-Download.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Did_You_Know_Food_5b56299b7db6eb7904d33520-e1533755574131.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/Fast-Food-Desktop-Wallpaper-1024x683.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Food-3.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Food-Desktop-Wallpaper-04859.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Food-HD-Images-04860.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Food-HD-Photos-04861.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Food-HD-Pics-04862.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Food-Hd-Wallpaper.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Food-Images.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Food-spices-on-black-table-top-HD-picture-02.jpg" ,
// tslint:disable-next-line: max-line-length
         "https://officialpiyush.github.io/cdn/food/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-10_acdb3e4bb37d0e3bcc26c97591d3dd6b.jpg" ,
// tslint:disable-next-line: max-line-length
         "https://officialpiyush.github.io/cdn/food/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-11_acdb3e4bb37d0e3bcc26c97591d3dd6b.jpg" ,
// tslint:disable-next-line: max-line-length
         "https://officialpiyush.github.io/cdn/food/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-12_acdb3e4bb37d0e3bcc26c97591d3dd6b.jpg" ,
// tslint:disable-next-line: max-line-length
         "https://officialpiyush.github.io/cdn/food/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-3_acdb3e4bb37d0e3bcc26c97591d3dd6b.jpg" ,
         "https://officialpiyush.github.io/cdn/food/HD-Pictures-Food.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Indian-Food-PNG-HD.png" ,
         "https://officialpiyush.github.io/cdn/food/Indian-Food-Samosa-Dish-HD-Wallpapers.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Junk-Food-Day-32.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Junk-Food-Pictures.jpg" ,
         "https://officialpiyush.github.io/cdn/food/P7puKj.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Photography-Kebab-Meat-Food-Wallpaper-HD-Desktop-Computer.jpg" ,
         "https://officialpiyush.github.io/cdn/food/SearchFX2_5b229dafac40a9f608232bc8-e1534189919644.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/Takeaway-Food-Wallpaper-Download.jpg" ,
         "https://officialpiyush.github.io/cdn/food/Veg_Salad_in_Bowl_HD_Pics.jpg" ,
         "https://officialpiyush.github.io/cdn/food/a-74-1280x960.jpg" ,
         "https://officialpiyush.github.io/cdn/food/breakfast-puff-bread-good-morning-wishes-wallpaper.jpg" ,
         "https://officialpiyush.github.io/cdn/food/cecb013d9e66f27b2e6180b063697b59.jpg" ,
         "https://officialpiyush.github.io/cdn/food/coffee_coffee_beans_cupcake_candy_93301_300x168.jpg" ,
         "https://officialpiyush.github.io/cdn/food/cook-food-kitchen-eat-54455.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/delicious_food_04_hd_pictures_167550.jpg" ,
         "https://officialpiyush.github.io/cdn/food/delicious_food_salad_03_hd_picture_167551.jpg" ,
         "https://officialpiyush.github.io/cdn/food/fast_food_burger-wallpaper-1920x1080.jpg" ,
         "https://officialpiyush.github.io/cdn/food/food-1932466__340.jpg" ,
         "https://officialpiyush.github.io/cdn/food/food-png-hd-www-trackmy-fit-1024.jpg" ,
// tslint:disable-next-line: max-line-length
         "https://officialpiyush.github.io/cdn/food/food-stock-video-footage-4k-and-hd-video-clips-shutterstock-dinner-table-with-food.jpg" ,
         "https://officialpiyush.github.io/cdn/food/food_picture_01_hd_pictures_167558.jpg" ,
         "https://officialpiyush.github.io/cdn/food/food_picture_02_hd_pictures_167557.jpg" ,
         "https://officialpiyush.github.io/cdn/food/food_picture_03_hd_pictures_167556.jpg" ,
         "https://officialpiyush.github.io/cdn/food/food_picture_05_hd_picture_167519.jpg" ,
         "https://officialpiyush.github.io/cdn/food/glt0sF.jpg" ,
         "https://officialpiyush.github.io/cdn/food/gummibarchen-318362__340.jpg" ,
         "https://officialpiyush.github.io/cdn/food/hd-iftari-images.jpg" ,
         "https://officialpiyush.github.io/cdn/food/hdtwo-food-photography-002.jpg" ,
         "https://officialpiyush.github.io/cdn/food/hdtwo-food-photography-014.jpg" ,
         "https://officialpiyush.github.io/cdn/food/home-image-25-jul-2012.jpg" ,
         "https://officialpiyush.github.io/cdn/food/image.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image.svg" ,
         "https://officialpiyush.github.io/cdn/food/image0.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image1.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image10.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image11.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image12.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image13.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image14.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image15.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image16.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image17.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image18.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image19.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image2.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image20.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image21.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image22.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image23.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image24.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image25.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image26.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image27.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image28.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image29.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image3.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image30.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image31.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image32.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image33.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image34.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image35.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image36.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image37.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image38.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image39.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image4.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image40.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image41.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image42.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image43.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image44.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image45.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image46.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image47.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image48.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image49.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image5.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image50.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image6.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image7.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image8.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/image9.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/images.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images0.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images1.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images10.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images11.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images12.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images13.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images14.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images15.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images16.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images17.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images18.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images19.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images2.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images20.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images21.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images22.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images23.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images24.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images25.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images3.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images4.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images5.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images6.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images7.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images8.jpg" ,
         "https://officialpiyush.github.io/cdn/food/images9.jpg" ,
         "https://officialpiyush.github.io/cdn/food/lime_segments_slices_green_background_45361_300x168.jpg" ,
         "https://officialpiyush.github.io/cdn/food/maxresdefault.jpg" ,
         "https://officialpiyush.github.io/cdn/food/maxresdefault0.jpg" ,
         "https://officialpiyush.github.io/cdn/food/mexican-food-wallpaper-hd-43047-44073-hd-wallpapers.jpg" ,
         "https://officialpiyush.github.io/cdn/food/pexels-photo-1268558.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/pexels-photo-1624487.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/pexels-photo-255501.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/pexels-photo-459469.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/pexels-photo-461198.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/pexels-photo-958545.jpeg" ,
         "https://officialpiyush.github.io/cdn/food/pizza-3007395__340.jpg" ,
        // tslint:disable-next-line: max-line-length
         "https://officialpiyush.github.io/cdn/food/png-hd-pizza-sushi-pizza-take-out-fast-food-submarine-sandwich-pizza-png-image-900.jpg" ,
         "https://officialpiyush.github.io/cdn/food/salad-2068220_960_720.jpg" ,
         "https://officialpiyush.github.io/cdn/food/thumb-1920-2957.jpg" ,
         "https://officialpiyush.github.io/cdn/food/thumb-350-988128.jpg" ,
         "https://officialpiyush.github.io/cdn/food/v1_a9667ff1.png" ,
         "https://officialpiyush.github.io/cdn/food/wp1929358.jpg" ,
         "https://officialpiyush.github.io/cdn/food/wp1929499.jpg"];
     }

     /**
      * @since 0.5.0
      * @desc Get a random food image.
      * @returns {String} - A random food image
      */
     public random(): string {
        return this.images[Math.floor(Math.random() * this.images.length)];
     }
 }


 /**
  * @exports FoodMachine
  */
 export = FoodMachine;
