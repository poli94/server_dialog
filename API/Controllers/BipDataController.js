'use strict';
var mongoose = require('mongoose');
var Countries = mongoose.model('Countries');

exports.processRequest = function(req, res) {
    getCountries(req,res)
};

function getCountries(req,res)
{
let cityToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.city ? req.body.result.parameters.city : 'Unknown';
console.log(cityToSearch);
Countries.findOne({name:cityToSearch},function(err,infoExists)
      {
        if (err)
        {
          return res.json({
              speech: 'Something went wrong!',
              displayText: 'Something went wrong!',
              source: 'bip info'
          });
        }
if (infoExists)
        {
          return res.json({
                fulfillmentText: infoExists.short,
                source: 'bip info'
            });
        }
        else {
        	
          return res.json({

                speech: 'Currently I am not having information about this bip ',
                short: 'Currently I am not having information about this bip',
                source: 'bip info'
            });
        }
      });
}
