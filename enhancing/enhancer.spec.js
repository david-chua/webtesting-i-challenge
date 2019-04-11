const enhancer = require('./enhancer.js');
// test away!
const longbow = { name: 'longbow', enhancement: 5, durability: 80 }
const doubleHandedSword = { name: 'double handed sword', enhancement: 5, durability: 55}
const crossbow = { name: 'crossbow', enhancement: 20, durability: 90 };

describe('the repair function', () => {

    it('should repair correctly', () => {

      const repairItem = enhancer.repair(longbow);
      const repairSwordItem = enhancer.repair(doubleHandedSword);

      expect(repairItem).toMatchObject({name: 'longbow', enhancement: 5, durability: 100});
      expect(repairSwordItem).toMatchObject({name: 'double handed sword', enhancement: 5, durability: 100})

    })
})

describe('The success function', () => {
  it ("should increase the enhancement unless it's already at 20", () => {

    const itemSuccess = enhancer.succeed(longbow);
    expect(itemSuccess).toMatchObject({name: 'longbow', enhancement: 6, durability: 100})

    const maxEnhanceSuccess = enhancer.succeed(crossbow);
    expect(maxEnhanceSuccess).toMatchObject({name: 'crossbow', enhancement: 20, durability: 90})
  })
})

describe('when the method fails', () => {
  it ("should decrease the item's durability", () => {
    const itemFail = enhancer.fail(longbow);
    expect(itemFail).toMatchObject({name: 'longbow', enhancement: 6, durability: 95 })
    const crossbowFail = enhancer.fail(crossbow);
    expect(crossbowFail).toMatchObject({name: 'crossbow', enhancement: 19, durability: 80})

  })
})
