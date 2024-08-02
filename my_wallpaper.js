//your parameter variables go here!
let wallpaper = 2; // colour palette of wallpaper
let catScale = 0.6; // scale cat glyph
let fruitScale = 1; // scale fruit glyph
let pattern = 1; // switch between cat and fruit patterns
let catFaceHeight = 18; // height of cat faces


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

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
    if (pattern == 0) {
      drawCat([50, 50], [100, 80], [color("#d4a373"), color("#785e46")]); // buff, coyote
      drawCat([150, 150], [100, 80], [color("#d4a373"), color("#785e46")]);
    } else if (pattern == 1) {
      drawPear([50, 50], [60, 60], [color("#ccd5ae"), color("#e9edc9"), color("#fefae0"), color("#785e46")]); // tea green, beige, cornsilk, coyote
      drawPear([150, 150], [60, 60], [color("#ccd5ae"), color("#e9edc9"), color("#fefae0"), color("#785e46")]);
    } else if (pattern == 2) {
      drawCat([50, 50], [100, 80], [color("#d4a373"), color("#785e46")]);
      drawPear([150, 150], [60, 60], [color("#ccd5ae"), color("#e9edc9"), color("#fefae0"), color("#785e46")]);
    }

  } else if (wallpaper == 1) {
    if (pattern == 0) {
      drawCat([50, 50], [100, 80], [color("#ffd6ba"), color("#8e6a57")]); // apricot, raw umber
      drawCat([150, 150], [100, 80], [color("#ffd6ba"), color("#8e6a57")]);
    } else if (pattern == 1) {
      drawBlueberry([50, 50], [60, 60], [color("#555b6e"), color("#54648a"), color("#8eb4cd")]); // payne's gray, lapis lazuli, carolina blue
      drawBlueberry([150, 150], [60, 60], [color("#555b6e"), color("#54648a"), color("#8eb4cd")]);
    } else if (pattern == 2) {
      drawCat([50, 50], [100, 80], [color("#ffd6ba"), color("#8e6a57")]);
      drawBlueberry([150, 150], [60, 60], [color("#555b6e"), color("#54648a"), color("#8eb4cd")]);
    }

  } else if (wallpaper == 2) {
    if (pattern == 0) {
      drawCat([50, 50], [100, 80], [color("#f0e6ef"), color("#735d73")]); // lavender blush, chinese violet
      drawCat([150, 150], [100, 80], [color("#f0e6ef"), color("#735d73")]);
    } else if (pattern == 1) {
      drawPassionfruit([50, 50], [60, 60], [color("#9c89b8"), color("#f0a6ca"), color("#efc3e6"), color("#735d73")]); // african violet, lavender pink, pink lavender, chinese violet
      drawPassionfruit([150, 150], [60, 60], [color("#9c89b8"), color("#f0a6ca"), color("#efc3e6"), color("#735d73")]);
    } else if (pattern == 2) {
      drawCat([50, 50], [100, 80], [color("#f0e6ef"), color("#735d73")]);
      drawPassionfruit([150, 150], [60, 60], [color("#9c89b8"), color("#f0a6ca"), color("#efc3e6"), color("#735d73")]);
    }
  }
}

function drawCat(pos, size, col) {
  push();
  scale(catScale);
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
  ellipse(pos[0] - 30, pos[1] - catFaceHeight + 14, 13, 13); // left
  ellipse(pos[0] + 30, pos[1] - catFaceHeight + 14, 13, 13); // right

  strokeWeight(3);
  stroke(col[1]);
  noFill();

  // mouth
  arc(pos[0] - 5.6, pos[1] - catFaceHeight + 10, size[0] / 7, size[1] / 5, 45, 135); // left
  arc(pos[0] + 5.6, pos[1] - catFaceHeight + 10, size[0] / 7, size[1] / 5, 45, 135); // right

  // whiskers
  line(pos[0] - 42, pos[1] - catFaceHeight + 18, pos[0] - 48, pos[1] - catFaceHeight + 19); // left
  line(pos[0] - 39, pos[1] - catFaceHeight + 23, pos[0] - 43, pos[1] - catFaceHeight + 27);
  line(pos[0] + 42, pos[1] - catFaceHeight + 18, pos[0] + 48, pos[1] - catFaceHeight + 19); // right
  line(pos[0] + 39, pos[1] - catFaceHeight + 23, pos[0] + 43, pos[1] - catFaceHeight + 27);

  // ears
  line(pos[0] - 30.6, pos[1] - (size[1] / 2) + 1, pos[0] - (size[0] / 2) + 16, pos[1] - 22); // left
  line(pos[0] - 30.6, pos[1] - (size[1] / 2) + 1, pos[0] - (size[0] / 2) + 25, pos[1] - 34);
  line(pos[0] + 30.6, pos[1] - (size[1] / 2) + 1, pos[0] + (size[0] / 2) - 16, pos[1] - 22); // right
  line(pos[0] + 30.6, pos[1] - (size[1] / 2) + 1, pos[0] + (size[0] / 2) - 25, pos[1] - 34);

  pop();
}

function drawPear(pos, size, col) {
  push();
  scale(fruitScale);

  // skin
  noStroke();
  fill(col[0]);
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

  pop();
}

function drawBlueberry(pos, size, col) {
  push();
  scale(fruitScale);

  noStroke();
  fill(col[1]);
  ellipse(pos[0], pos[1], size[0], size[1] / 1.2);

  fill(col[0]);
  ellipse(pos[0], pos[1] - 12, size[0] / 1.8, size[1] / 3);

  fill(col[2]);
  ellipse(pos[0], pos[1] - 12, size[0] / 2.4, size[1] / 4.2);

  pop();
}

function drawPassionfruit(pos, size, col) {
  scale(fruitScale);
  noStroke();
  fill(col[0]);
  ellipse(pos[0], pos[1], size[0], size[1]);

  fill(col[2]);
  ellipse(pos[0], pos[1], size[0] / 1.15, size[1] / 1.15);

  fill(col[1]);
  ellipse(pos[0], pos[1], size[0] / 1.35, size[1] / 1.35);

  fill(col[3]);

  translate(pos[0], pos[1]);
  
  push();

  // outside seeds
  ellipse(-17, 0, size[0] / 9, size[1] / 16);
  rotate(45);
  ellipse(-17, 0, size[0] / 9, size[1] / 16);
  rotate(45);
  ellipse(-17, 0, size[0] / 9, size[1] / 16);
  rotate(45);
  ellipse(-17, 0, size[0] / 9, size[1] / 16);
  rotate(45);
  ellipse(-17, 0, size[0] / 9, size[1] / 16);
  rotate(45);
  ellipse(-17, 0, size[0] / 9, size[1] / 16);
  rotate(45);
  ellipse(-17, 0, size[0] / 9, size[1] / 16);
  rotate(45);
  ellipse(-17, 0, size[0] / 9, size[1] / 16);

  pop();
  push();

  // bottom inner seeds
  rotate(22.5);
  ellipse(7, 0, size[0] / 9, size[1] / 16);
  rotate(67.5);
  ellipse(7, 0, size[0] / 9, size[1] / 16);
  rotate(67.5);
  ellipse(7, 0, size[0] / 9, size[1] / 16);

  pop();
  push();

  // top inner seeds
  rotate(-22.5);
  ellipse(7, 0, size[0] / 9, size[1] / 16);
  rotate(-67.5);
  ellipse(7, 0, size[0] / 9, size[1] / 16);
  rotate(-67.5);
  ellipse(7, 0, size[0] / 9, size[1] / 16);

  pop();
}