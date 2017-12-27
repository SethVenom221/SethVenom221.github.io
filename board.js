var board = document.createElement("canvas");
board.width = window.innerWidth;
board.height = window.innerHeight - 50;
board.style.width = board.width + "px";
board.style.height = board.height + "px";
board.style.position = "absolute";
board.style.left = "0px";
board.style.top = "50px";
document.body.appendChild(board);
