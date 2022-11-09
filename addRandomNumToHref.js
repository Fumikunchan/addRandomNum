const links = document.querySelectorAll('ol.LIST li a');
const random = Math.floor(Math.random() * 100000);
links.forEach((e) => {
  e.href = `${e.href}?${random}`;
});
