var property=[];
const updateObj = {};

const updatedProperty = property.map(obj => {
  if (property.name === updateObj.name) {
    return { ...property, ...updateObj };
  }
  return property;
});

console.log(updatedProperty);
exports.take={
    property,
    updateObj,
    updatedProperty
}
