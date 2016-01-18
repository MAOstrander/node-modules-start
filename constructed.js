require('./index');

function Building() {
  this.isBurned = false;
}

Building.prototype.burn = function () {
  console.log('🔥🏠🔥');
  this.isBurned = true;
};

module.exports = new Building();
