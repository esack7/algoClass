var Stack = function() {
  this.storage = '';
};

Stack.prototype.push = function(val) {
  if (!this.storage) {
    if (typeof val !== 'string') {
      return (this.storage = JSON.stringify(val) + this.storage);
    } else {
      return (this.storage = val + this.storage);
    }
  } else {
    if (typeof val !== 'string') {
      return (this.storage = JSON.stringify(val) + ' + ' + this.storage);
    } else {
      return (this.storage = val + ' + ' + this.storage);
    }
  }
};

Stack.prototype.pop = function() {
  let store = this.storage.split(' + ');
  let pop = store[0];
  store.shift();
  this.storage = store.join(' + ');
  if (typeof JSON.parse(pop) !== 'string') {
    pop = JSON.parse(pop);
  }
  return pop;
};

Stack.prototype.size = function() {
  let storeLength = this.storage.split(' + ').length;
  console.log(storeLength);
  return storeLength;
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push('RedBeans');
myWeeklyMenu.push('Rice');
myWeeklyMenu.push('CannedTomatoes');
myWeeklyMenu.push('Bread');
myWeeklyMenu.push(5);
myWeeklyMenu.size();
myWeeklyMenu.pop();
myWeeklyMenu.size();
console.log(myWeeklyMenu);
