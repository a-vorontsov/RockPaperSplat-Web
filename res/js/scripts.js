function download() {
  var canvas = document.getElementById( "canvas" );
  var dt = canvas.toDataURL( 'image/png' );
  this.href = dt;
};
downloadLink.addEventListener( 'click', download, false );

var can = document.getElementById( 'canvas' ),
  boxes = 64,
  size = 10,
  ctx = can.getContext( '2d' );

can.addEventListener( 'mousemove', function( evt ) {
  var mousePos = getMousePos( can, evt );
  var sx = ( Math.ceil( mousePos.x / size ) - 1 ) * size,
    sy = ( Math.ceil( mousePos.y / size ) - 1 ) * size;
}, false );

can.addEventListener( 'mousedown', function( evt ) {
  var customColor = document.getElementById( 'colorPicker' );
  var mousePos = getMousePos( can, evt );
  var sx = ( Math.ceil( mousePos.x / size ) - 1 ) * size,
    sy = ( Math.ceil( mousePos.y / size ) - 1 ) * size;
  ctx.fillStyle = customColor.value;
  ctx.fillRect( sx, sy, size, size );
} );

function getMousePos( canvas, evt ) {
  var rect = can.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function saveCanvas() {
  var canvas = document.getElementById( "canvas" );
  var img = canvas.toDataURL();
}

var canvas = document.getElementById( 'canvasGrid' ),
  boxes = 64,
  size = 10,
  context = canvas.getContext( '2d' );

function drawGrid() {
  var len = canvas.height = canvas.width = boxes * size;
  for ( var i = 0; i < boxes; i++ ) {
    context.beginPath();
    context.strokeStyle = "#000";
    context.moveTo( size + size * i - .5, 0 );
    context.lineTo( size + size * i - .5, len );
    context.moveTo( 0, size + size * i - .5 );
    context.lineTo( len, size + size * i - .5 );
    context.stroke();
  }
}

drawGrid();
