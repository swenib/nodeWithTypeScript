import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getHeroes, getHero, updateHero, addHero, deleteHero } from './herodb';

const app = express();
const PORT = process.env.PORT || 3000;
const herourl = '/api/heroes';

app.use(cors());
app.use(bodyParser.json());

app.get(herourl, (req, res) => res.send(getHeroes()));

app.get(herourl + '/:id', (req, res) => {
  const heroId = parseInt(req.params.id);
  const hero = getHero(heroId);
  if (hero === undefined) {
    res.send(`hero with id ${heroId} not found`);
  } else {
    res.send(hero);
  }
});

app.put(herourl, (req, res) => {
  res.send(updateHero(req.body));
});

app.post(herourl, (req, res) => {
  res.send(addHero(req.body));
});

app.delete(herourl + '/:id', (req, res) => {
  const heroId = parseInt(req.params.id);
  res.send(deleteHero(heroId));
});

app.get('*', (req, res) => res.redirect(herourl));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
