const route=require('express').Router();
const express=require('express');
const path=require('path')

route.use('/calcbutton.wav',express.static(path.join("./sounds/calcbutton.wav")));
route.use('/microwavebeep.wav',express.static(path.join("./sounds/microwavebeep.wav")));

exports=module.exports=route;