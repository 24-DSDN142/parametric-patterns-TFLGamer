//your parameter variables go here!
let wallpaper = 0; // colour palette of wallpaper
let outline = false; // turns stroke on and off

let defaultCol = ("WHITE");


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
  if (wallpaper == 0) {
    background(color("#faedcd")); // papaya whip

  } else if (wallpaper == 1) {
    background(color("#faf9f9")); // seasalt

  } else if (wallpaper == 2) {
    background(color("#b8bedd")); // periwinkle

  }
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  if (!outline) {
    noStroke();
  }

  if (wallpaper == 0) {
    drawCat([50, 50], [100, 100], color("#d4a373")); // buff
    drawFruit([[150, 150], [150, 150], [150, 150]], [[100, 100], [75, 75], [50, 50]], 
      [color("#ccd5ae"), color("#e9edc9"), color("#fefae0")]); // tea green, beige, cornsilk

  } else if (wallpaper == 1) {
    drawCat([50, 50], [100, 100], color("#ffd6ba")); // apricot
    drawFruit([[150, 150], [150, 150], [150, 150]], [[100, 100], [75, 75], [50, 50]], 
      [color("#555b6e"), color("#89b0ae"), color("#bee3db")]); // payne's gray, cambridge blue, mint green

  } else if (wallpaper == 2) {
    drawCat([50, 50], [100, 100], color("#f0e6ef")); // lavender blush
    drawFruit([[150, 150], [150, 150], [150, 150]], [[100, 100], [75, 75], [50, 50]], 
      [color("#9c89b8"), color("#f0a6ca"), color("#efc3e6")]); // african violet, lavender pink, pink lavender

  } else {
    drawCat([0, 0], [100, 100], defaultCol);
    drawFruit([[100, 100], [100, 100], [100, 100]], [[100, 100], [75, 75], [50, 50]], 
      [defaultCol, defaultCol, defaultCol]);
  }
}

function drawCat(pos, size, col) {
  fill(col);
  ellipse(pos[0], pos[1], size[0], size[1]);
}

function drawFruit(pos, size, col) {
  fill(col[0]);
  ellipse(pos[0][0], pos[0][1], size[0][0], size[0][1]);
  fill(col[1]);
  ellipse(pos[1][0], pos[1][1], size[1][0], size[1][1]);
  fill(col[2]);
  ellipse(pos[2][0], pos[2][1], size[2][0], size[2][1]);
}
