//your parameter variables go here!
let cat = 2; // type of cat
let bg = 3; // colour of background

let catCol = ("WHITE");

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  if (bg == 0) {
    background(color("#f9ebc7")); // lemon meringue

  } else if (bg == 1) {
    background(color("#d5e4cf")); // some green

  } else if (bg == 2) {
    background(color("#ffcfd2")); // baby pink

  } else if (bg == 3) {
    background(color("#bcd4e6")); // some blue

  }
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  if (cat == 0) {
    catCol = (color(240, 240, 240)); // slightly grey-white

  } else if (cat == 1) {
    catCol = (color(200, 200, 200)); // grey

  } else if (cat == 2) {
    catCol = (color("#f7b670")); // orange

  } else if (cat == 3) {
    catCol = (color("#b99470")); // brown

  }

  noStroke();
  fill(catCol);
  ellipse(0, 0, 100, 100);

}
