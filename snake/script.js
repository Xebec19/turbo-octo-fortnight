kaboom();

const block_size = 20;

const sceneMap = [
  "=========================",
  "=                       =",
  "=                       =",
  "=                       =",
  "=                       =",
  "=                       =",
  "=                       =",
  "=                       =",
  "=                       =",
  "=                       =",
  "=                       =",
  "=========================",
];

const sceneConfig = {
  tileWidth: "100%",
  tileHeight: "100%",

  tiles: {
    "=": () => [rect(block_size, block_size), color(255, 0, 0), area(), "wall"],
  },
};

// const map = addLevel(
//   sceneMap,
//   {
//     width: block_size,
//     height: block_size,
//     pos: vec2(0, 0),

//   }
// );

const level = addLevel(sceneMap, sceneConfig);

const directions = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
};

let current_direction = directions.RIGHT;
let run_action = false;
let snake_length = 3;
let snake_body = [];
