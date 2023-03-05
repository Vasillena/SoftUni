function extensibleObject() {
  function ExtensibleObject() {
    ExtensibleObject.prototype.extend = function (tempLate) {
      Object.entries(tempLate).forEach(([key, value]) => {
        if (value instanceof Function) {
          Object.getPrototypeOf(this)[key] = value;
        } else {
          this[key] = value;
        }
      });
    };
  }
  return new ExtensibleObject();
}

const myObj = extensibleObject();
console.log(myObj);

const template = {
  extensionMethod: function () {},
  extensionProperty: "something",
};
myObj.extend(template);
console.log(myObj);
