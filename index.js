const $ = require('jquery');
const colors = require('color-name');

const append = function(color) {
  $('<div>').css({
    'width': '30px',
    'height': '30px',
    'background-color': color
  }).appendTo('body');
};

$(function () {
  Object.keys(colors).forEach(function (color) {
    append(color);
  });
});