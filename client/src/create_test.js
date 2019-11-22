const assert = require('assert');
const Product = require('../src/schema')

describe('Creating Records', () => {
  it('saves a product', () => {
    const vlone = new Product({
      name: "Vlone Denim Jacket"
    });

    vlone.save();
    assert(!vlone.isNew);
    done();
  });
});