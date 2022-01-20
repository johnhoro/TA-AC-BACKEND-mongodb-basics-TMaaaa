var article = [
  {
    _id: "1",
    title: "Mackbook Air",
    details: "laptop",
    author: {
      name: "kushal",
      email: "abc1@gmail.com",
      age: "24",
    },
    tags: ["js", "html", "mongo"],
  },
  {
    _id: "2",
    title: "Play Station",
    details: "Gaming",
    author: {
      name: "john",
      email: "abc2@gmail.com",
      age: "24",
    },
    tags: ["js", "node", "mongo"],
  },

  {
    _id: "3",
    title: "Google Pixel",
    details: "phone",
    author: {
      name: "vijay",
      email: "abc3@gmail.com",
      age: "25",
    },
    tags: ["js", "mongo"],
  },
];

db.articles.insert({
  _id: "3",
  title: "Google Pixel",
  details: "phone",
  author: {
    name: "vijay",
    email: "abc3@gmail.com",
    age: "25",
  },
  tags: ["js", "mongo"],
});

db.articles.find({ tags: ["js", "mongo"] });
