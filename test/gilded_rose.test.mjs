import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";


const backstagePass = "Backstage passes to a TAFKAL80ETC concert";
const agedBrie = "Aged Brie";
const hammer =  "Sulfuras, Hand of Ragnaros";


describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  it("should not change number of items", () => {
    const initialItems = [
      new Item("foo", 0, 0),
      new Item("foo", 0, 0),
      new Item("foo", 0, 0)
    ]

    const gildedRose = new Shop(initialItems);
    const items = gildedRose.updateQuality();
   
    expect(items.length).to.equal(3);
  });

  it("has zero items by default", () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
   
    expect(items.length).to.equal(0);
  });
});

describe("foo, 0, 0", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item("foo", 0, 0)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(-1);
  });

  it("should not change quality", () => {
    expect(item.quality).to.equal(0);
  });
});

describe("foo, 0, 1", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item("foo", 0, 1)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(-1);
  });

  it("drops quality by 1", () => {
    expect(item.quality).to.equal(0);
  });
});

describe("foo, 0, 10", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item("foo", 0, 10)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(-1);
  });

  it("drops quality by 2", () => {
    expect(item.quality).to.equal(8);
  });
});

describe("foo, 0, 100", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item("foo", 0, 100)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(-1);
  });

  it("drops quality by 2", () => {
    expect(item.quality).to.equal(98);
  });

});

describe("foo, 1, 1", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item("foo", 1, 1)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(0);
  });

  it("quality drops by 1", () => {
    expect(item.quality).to.equal(0);
  });
});

describe("foo, 1, 2", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item("foo", 1, 2)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(0);
  });

  it("quality drops by 1", () => {
    expect(item.quality).to.equal(1);
  });
});

describe("Brie, -10, 50", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(agedBrie, -10, 50)]);
    item = gildedRose.updateQuality()[0];
  })

  it("sellIn drops by 1", () => {
    expect(item.sellIn).to.equal(-11);
  });

  it("quality stays at 50", () => {
    expect(item.quality).to.equal(50);
  });  
});


describe("Brie, -10, 100", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(agedBrie, -10, 100)]);
    item = gildedRose.updateQuality()[0];
  })

  it("sellIn drops by 1", () => {
    expect(item.sellIn).to.equal(-11);
  });

  it("quality stays at 100", () => {
    expect(item.quality).to.equal(100);
  });  
});

describe("Brie, 0, 0", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(agedBrie, 0, 0)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(-1);
  });

  it("increases quality by 2", () => {
    expect(item.quality).to.equal(2);
  });
});


describe("Brie, 0, 10", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(agedBrie, 0, 10)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(-1);
  });

  it("increasees quality by 2", () => {
    expect(item.quality).to.equal(12);
  });
});

describe("Brie, 100, 100", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(agedBrie, 100, 100)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(99);
  });

  it("quality stays at 100", () => {
    expect(item.quality).to.equal(100);
  });
});

describe("Hammer, -10, 10", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(hammer, -10, 10)]);
    item = gildedRose.updateQuality()[0];
  })

  it("sellIn stays at -10", () => {
    expect(item.sellIn).to.equal(-10);
  });

  it("quality stays at 10", () => {
    expect(item.quality).to.equal(10);
  });
});


describe("Hammer, -10, 100", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(hammer, -10, 100)]);
    item = gildedRose.updateQuality()[0];
  })

  it("sellIn stays at -10", () => {
    expect(item.sellIn).to.equal(-10);
  });

  it("quality stays at 10", () => {
    expect(item.quality).to.equal(100);
  });  
});

describe("Hammer, 0, 0", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(hammer, 0, 0)]);
    item = gildedRose.updateQuality()[0];
  })

  it("sellIn stays at 0", () => {
    expect(item.sellIn).to.equal(0);
  });

  it("quality stays at 0", () => {
    expect(item.quality).to.equal(0);
  });
});

describe("Hammer, 0, 10", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(hammer, 0, 10)]);
    item = gildedRose.updateQuality()[0];
  })

  it("sellIn stays at 0", () => {
    expect(item.sellIn).to.equal(0);
  });

  it("quality stays at 10", () => {
    expect(item.quality).to.equal(10);
  });
});

describe("Hammer, 1, 0", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(hammer, 1, 0)]);
    item = gildedRose.updateQuality()[0];
  })

  it("sellIn stays at 1", () => {
    expect(item.sellIn).to.equal(1);
  });

  it("quality stays at 0", () => {
    expect(item.quality).to.equal(0);
  });
});

describe("Hammer, 1, 2", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(hammer, 1, 2)]);
    item = gildedRose.updateQuality()[0];
  })

  it("sellIn stays at 1", () => {
    expect(item.sellIn).to.equal(1);
  });

  it("quality stays at 2", () => {
    expect(item.quality).to.equal(2);
  });
});

describe("Pass, 0, 0", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(backstagePass, 0, 0)]);
    item = gildedRose.updateQuality()[0];
  })

  it("should not change quality", () => {
    expect(item.quality).to.equal(0);
  });

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(-1);
  });
});

describe("Pass, 0, 10", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(backstagePass, 0, 10)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(-1);
  });

  it("quality drops to zero", () => {
    expect(item.quality).to.equal(0);
  });
});

describe("Pass, 1, 1", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(backstagePass, 1, 1)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(0);
  });

  it("quality increases by 3", () => {
    expect(item.quality).to.equal(4);
  });
});

describe("Pass, 1, 48", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(backstagePass, 1, 48)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(0);
  });

  it("quality increases by 2", () => {
    expect(item.quality).to.equal(50);
  });
});

describe("Pass, 6, 6", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(backstagePass, 6, 6)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(5);
  });

  it("quality increases by 2", () => {
    expect(item.quality).to.equal(8);
  });
});


describe("Pass, 10, 10", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(backstagePass, 10, 10)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(9);
  });

  it("quality increases by 2", () => {
    expect(item.quality).to.equal(12);
  });
});

describe("Pass, 10, 49", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(backstagePass, 10, 49)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(9);
  });

  it("quality increases by 1", () => {
    expect(item.quality).to.equal(50);
  });
});

describe("Pass, 11, 11", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(backstagePass, 11, 11)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(10);
  });

  it("quality increases by 1", () => {
    expect(item.quality).to.equal(12);
  });
});

describe("Pass, 49, 49", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(backstagePass, 49, 49)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(48);
  });

  it("quality increases by 1", () => {
    expect(item.quality).to.equal(50);
  });
});


describe("Pass, 50, 50", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(backstagePass, 50, 50)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(49);
  });

  it("quality stays at 50", () => {
    expect(item.quality).to.equal(50);
  });
});


describe("Pass, 100, 100", () => {
  let gildedRose;
  let item;
  beforeEach(() => {
    gildedRose = new Shop([new Item(backstagePass, 100, 100)]);
    item = gildedRose.updateQuality()[0];
  })

  it("drops sellIn by 1", () => {
    expect(item.sellIn).to.equal(99);
  });

  it("quality stays at 100", () => {
    expect(item.quality).to.equal(100);
  });
});

describe("Conjured items", () => {
  let gildedRose;
  let item;

  it("quality before sellIn degrades by 2", () => {
    gildedRose = new Shop([new Item('foo', 10, 10, true)])
    item = gildedRose.updateQuality()[0];

    expect(item.quality).to.equal(8);
  });

  it("quality after sellIn degrades by 4", () => {
    gildedRose = new Shop([new Item('foo', 0, 10, true)])
    item = gildedRose.updateQuality()[0];

    expect(item.quality).to.equal(6);
  }); 
});
