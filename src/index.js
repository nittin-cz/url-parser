const removeDiacritics = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const parseUrl = (str) => {
  let url = removeDiacritics(str)
    .replace(/[^\w\s-]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();

  return url.replace(/^-+|-+$/g, "");
};

module.exports = {
  parseUrl,
};
