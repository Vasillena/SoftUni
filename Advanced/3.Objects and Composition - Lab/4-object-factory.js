function objectFactory(library, orders) {
  const result = [];

  for (let order of orders) {
    const object = {};

    for (let prop in order.template) {
      object[prop] = order.template[prop];
    }

    const parts = order.parts;

    for (let part of parts) {
      object[part] = library[part];
    }
    result.push(object);
  }
  return result;
}
  const lib = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },

    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },

    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };

  const orders = [
    {
      template: { name: "ACME Printer" },
      parts: ["print"],
    },
    {
      template: { name: "Initech Scanner" },
      parts: ["scan"],
    },
    {
      template: { name: "ComTron Copier" },
      parts: ["scan", "print"],
    },
    {
      template: { name: "BoomBox Stereo" },
      parts: ["play"],
    },
  ];
  const products = objectFactory(lib, orders);
  console.log(products);