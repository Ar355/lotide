const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const tail = require('../tail');

assertEqual(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]),true);
