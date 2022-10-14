const files = import.meta.globEager("./*.js");
const modules = [];

for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    modules.push(files[key].default);
  }
}

export default modules;
