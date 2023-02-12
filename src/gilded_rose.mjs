export class Item {
  constructor(name, sellIn, quality, conjured = false) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.conjured = conjured;
  }
}

const backstagePass = "Backstage passes to a TAFKAL80ETC concert";
const agedBrie = "Aged Brie";
const hammer =  "Sulfuras, Hand of Ragnaros";

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => updateItem(item));
    return this.items;
  }
}

function updateItem(item) {
  if (item.name === hammer) return;

  dropSellInByOne(item)
  
  switch (item.name){
    case agedBrie:
      updateBrie(item);
      break;
    case backstagePass:
      updatePass(item);
      break;
    default:
      updateOtherItem(item)
  }
}

function updateBrie(item) {
  increaseQuality(item, 2);
}

function updatePass(item) {
  if (item.sellIn < 0) {
    item.quality = 0;
    return;
  }

  let qualityIncrease = 1;
  if (item.sellIn < 10)  {
    qualityIncrease = 2;
  }
  if (item.sellIn < 5) {
    qualityIncrease = 3;
  }
  increaseQuality(item, qualityIncrease);
}


function updateOtherItem(item) {
  degradeQuality(item)  
}

function increaseQuality(item, amount = 1) {
  if (item.quality > 49) return;
  item.quality = Math.min(item.quality + amount, 50);
}

function degradeQuality(item) {
  let decrease = 1;
  if (item.sellIn < 0) {
    decrease *= 2;
  }
  if (item.conjured) {
    decrease *= 2;
  }

  item.quality = Math.max(item.quality - decrease, 0);
}

function dropSellInByOne(item) {
  item.sellIn = item.sellIn - 1;
}