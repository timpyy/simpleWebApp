const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require("body-parser");

const staticPath = path.resolve(__dirname, 'public');
const art1 = {
  'title' : 'washington sq arch',
  'date' : '2018-09-29',
  'tags' : ['architecture', 'public'],
  'artwork' :
` _______________
 |~|_________|~|
 |::::\\^o^/::::|
 ---------------
 |..|/     \\|..|
 ---        ----
 |  |       |  |
 |  |       |  |
 |  |       |  |
.|__|.     .|__|.`
};
const art2 = {
  'title' : 'boba',
  'date' : '2018-09-30',
  'tags' : ['snack', 'notmybestwork'],
  'artwork' :
`  ______
  ======
 /      \\
|        |-.
|        |  \\
|O.o:.o8o|_ /
|.o.8o.O.|
 \\.o:o.o/`
};
const art3 = {
  'title' : 'whale',
  'date' : '2018-10-31',
  'tags' : ['animal', 'whalehellothere', 'bigfishy'],
  'artwork' : `               __   __
              __ \\ / __
             /  \\ | /  \\
                 \\|/
            _,.---v---._
   /\\__/\\  /            \\
   \\_  _/ /              \\
     \\ \\_|           @ __|
      \\                \\_
       \\     ,__/       /
     ~~~\\~~~~~~~~~~~~~~/~~~~`,
};
let artArr = [art1, art2, art3];
app.use(express.static(staticPath));

app.set('view engine', 'hbs');

app.get('/', (req, res) => res.render('myTemplate', { 'title': 'ascii sketchbook', 'textart': artArr}));
app.get('/filter', (req, res) => {
  let artNumber = 0;
  const tag = req.query.tag;
  for(let i = 0; i < artArr.length; i++) {
    for(let j = 0; j < artArr[i].tags.length; j++) {
      if(artArr[i].tags[j].includes(tag)) {
        artNumber = i;
      }
    }
  }
  if(tag == "") {
    res.render('myTemplate', { 'title': 'ascii sketchbook', 'textart': artArr});
  }
  else {
    res.render('filtered', {'title': 'ascii sketchbook', 'textart': artArr[artNumber]});
  }
}
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const logger = (req, res, next) => {
console.log(req.method, req.path, req.query);
next();
};
app.use(logger);
//app.listen(3000);
