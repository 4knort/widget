const dream = require('dreamjs');
const jsonfile = require('jsonfile');
const uuid = require('node-uuid');
const mkdirp = require('mkdirp');

const config = {
  path: './public/banks.json',
  amount: 50,
  titleLength: 1,
};

dream.customType('bank:title', (helper) => helper.chance.sentence({ words: config.titleLength }));

dream.schema('bank', {
  title: 'bank:title',
});

mkdirp('./public', (err) => {
  err || dream.useSchema('bank')
    .generateRnd(config.amount)
    .output((error, result) => jsonfile.writeFile(config.path, result));
});
