const fs = require("fs");
const directory = "needprocess";
const outputDirectory = "posts";

fs.readdirSync(directory).forEach(file => {
  let content = fs.readFileSync(`${directory}/${file}`);
  content = "---\n" + content;
  content = content.replace("Title", "title");
  content = content.replace("Author", "author");
  content = content.replace("IsPublished", "isPublished");
  content = content.replace("\nPublished", "\npublished");
  content = content.replace("Tags", "tags");
  content = content.replace("Thumbnail", "thumbnail");
  fs.writeFileSync(`${outputDirectory}/${file}`, content);
});