const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([{
            id: 1,
            image: 'https://placeimg.com/64/64/1',
            name: 'John',
            birthday: '19801111',
            gender: 'Male',
            job: 'developer'
          },
          {
            id: 2,
            image: 'https://placeimg.com/64/64/2',
            name: 'Anna',
            birthday: '19801112',
            gender: 'Female',
            job: 'Designer'
          },
          {
            id: 3,
            image: 'https://placeimg.com/64/64/3',
            name: 'Mike',
            birthday: '19801113',
            gender: 'Male',
            job: 'engineer'
          }
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
