//your parameter variables go here!
let wallpaper = 1; // colour palette of wallpaper
let catScale = 1; // scale cat glyph
let fruitScale = 1; // scale fruit glyph
let pattern = 0; // switch between cat and fruit patterns

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
  if (wallpaper == 0) {
    drawCat([50, 50], [100, 80], [color("#d4a373"), color("#785e46")]); // buff, coyote
    drawPear([150, 150], [60, 60], [color("#ccd5ae"), color("#e9edc9"), color("#fefae0"), color("#785e46")]); // tea green, beige, cornsilk, coyote

  } else if (wallpaper == 1) {
    drawCat([50, 50], [100, 80], [color("#ffd6ba"), color("#8e6a57")]); // apricot, raw umber
    drawBlueberry([150, 150], [60, 60], [color("#555b6e"), color("#54648a"), color("#8eb4cd")]); // payne's gray, lapis lazuli, carolina blue

  } else if (wallpaper == 2) {
    drawCat([50, 50], [100, 80], [color("#f0e6ef"), color("#735d73")]); // lavender blush, chinese violet
    drawPassionfruit([150, 150], [60, 60], [color("#9c89b8"), color("#f0a6ca"), color("#efc3e6")]); // african violet, lavender pink, pink lavender

  } else {
    drawCat([0, 0], [100, 100], defaultCol);
    drawFruit([[100, 100], [100, 100], [100, 100]], [[100, 100], [75, 75], [50, 50]], 
      [defaultCol, defaultCol, defaultCol]);
  }
}

function drawCat(pos, size, col) {
  noStroke();
  fill(col[0]);

  // main head
  ellipse(pos[0], pos[1], size[0], size[1]);

  // ears
  quad(pos[0] - 15, pos[1] - (size[0] / 2) + 12, pos[0] - 22, pos[1] - (size[1] / 2) - 5, 
    pos[0] - 40, pos[1] - (size[1] / 2), pos[0] - (size[0] / 2) + 6, pos[1] - 19); // left
  ellipse((pos[0] - 30.6), pos[1] - (size[1] / 2) - 1, 18.6, 19);
  quad(pos[0] + 15, pos[1] - (size[0] / 2) + 12, pos[0] + 22, pos[1] - (size[1] / 2) - 5, 
    pos[0] + 40, pos[1] - (size[1] / 2), pos[0] + (size[0] / 2) - 6, pos[1] - 19); // right
  ellipse((pos[0] + 30.6), pos[1] - (size[1] / 2) - 1, 18.6, 19);

  // cheeks & base of head
  ellipse(pos[0] - 30, pos[1] + 8, 50, 64); // left
  ellipse(pos[0] + 30, pos[1] + 8, 50, 64); // right
  ellipse(pos[0], (pos[1] + size[1] / 2) - 5.4, 80, 20);

  fill(col[1]);

  // eyes
  ellipse(pos[0] - 30, pos[1] + 14, 13, 13); // left
  ellipse(pos[0] + 30, pos[1] + 14, 13, 13); // right

  strokeWeight(3);
  stroke(col[1]);
  noFill();

  // mouth
  arc(pos[0] - 5.6, pos[1] + 10, size[0] / 7, size[1] / 5, 45, 135); // left
  arc(pos[0] + 5.6, pos[1] + 10, size[0] / 7, size[1] / 5, 45, 135); // right

  // whiskers
  line(pos[0] - 42, pos[1] + 18, pos[0] - 48, pos[1] + 19); // left
  line(pos[0] - 39, pos[1] + 23, pos[0] - 43, pos[1] + 27);
  line(pos[0] + 42, pos[1] + 18, pos[0] + 48, pos[1] + 19); // right
  line(pos[0] + 39, pos[1] + 23, pos[0] + 43, pos[1] + 27);

  // ears
  line(pos[0] - 30.6, pos[1] - (size[1] / 2) + 1, pos[0] - (size[0] / 2) + 16, pos[1] - 22); // left
  line(pos[0] - 30.6, pos[1] - (size[1] / 2) + 1, pos[0] - (size[0] / 2) + 25, pos[1] - 34);
  line(pos[0] + 30.6, pos[1] - (size[1] / 2) + 1, pos[0] + (size[0] / 2) - 16, pos[1] - 22); // right
  line(pos[0] + 30.6, pos[1] - (size[1] / 2) + 1, pos[0] + (size[0] / 2) - 25, pos[1] - 34);

}

function drawPear(pos, size, col) {
  noStroke();
  fill(col[0]);

  // skin
  ellipse(pos[0], pos[1], size[0], size[1]);
  ellipse(pos[0], pos[1] - 35, size[0] / 1.5, size[1] / 1.5);

  strokeWeight(5);
  stroke(col[0]);
  noFill();

  arc(pos[0] - 30, pos[1] - 30, size[0] / 2.4, size[1] / 1.75, -10, 50); // left
  arc(pos[0] + 30, pos[1] - 30, size[0] / 2.4, size[1] / 1.75, 130, 190); // right

  // flesh
  noStroke();
  fill(col[2]);

  ellipse(pos[0], pos[1], size[0] / 1.2, size[1] / 1.2);
  ellipse(pos[0], pos[1] - 35, size[0] / 2, size[1] / 2);

  strokeWeight(7);
  stroke(col[2]);
  noFill();

  arc(pos[0] - 24, pos[1] - 28.5, size[0] / 2.3, size[1] / 1.7, -10, 50); // left
  arc(pos[0] + 24, pos[1] - 28.5, size[0] / 2.3, size[1] / 1.7, 130, 190); // right

  // core
  noStroke();
  fill(col[1]);

  ellipse(pos[0], pos[1], size[0] / 4, size[1] / 4);

  strokeWeight(5);
  stroke(col[1]);

  line(pos[0] - 5.2, pos[1], pos[0], pos[1] - 10); // left
  line(pos[0] + 5.2, pos[1], pos[0], pos[1] - 10); // right

  // seeds
  noStroke();
  fill(col[3]);

  ellipse(pos[0] - 2.4, pos[1], size[0] / 20, size[1] / 9); // left
  ellipse(pos[0] + 2.4, pos[1], size[0] / 20, size[1] / 9); // right
}

function drawBlueberry(pos, size, col) {
  noStroke();
  fill(col[1]);

  ellipse(pos[0], pos[1], size[0], size[1] / 1.2);

  fill(col[0]);

  ellipse(pos[0], pos[1] - 12, size[0] / 1.8, size[1] / 3);

  fill(col[2]);

  ellipse(pos[0], pos[1] - 12, size[0] / 2.4, size[1] / 4.2);
}

function drawPassionfruit(pos, size, col) {
  noStroke();
  fill(col[0]);

  ellipse(pos[0], pos[1], size[0], size[1]);

  fill(col[1]);

  ellipse(pos[0], pos[1], size[0] / 2, size[1] / 2);

  fill(col[2]);

  ellipse(pos[0], pos[1], size[0] / 4, size[1] / 4);
}