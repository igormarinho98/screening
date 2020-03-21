var Form = require('./../models/form');

exports.list = function(req, res){
    Form.find({}, function(err, data){
        if(err){
            return;
        }
        res.render('forms_list', 
        {
            data:data
        });
    });
  
};

exports.new = function(req, res){
    res.render('forms_new');
};

exports.create = function(req, res){
    Form.create(req.body, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/forms');
    });
    
};

exports.edit = function(req, res){
    Form.findById(req.params.id, function(err, data){
        if(err){
            return;
        }
    
        res.render('forms_edit', {
        data: data
        }); 
    });
};

exports.update = function(req, res){
    Form.update({
        _id: req.params.id
    },req.body, function(err){
        if(err){
            return;
        }
        
        res.redirect('/forms');
    });
};

exports.remove = function(req, res){
    Form.remove({
        _id: req.params.id
    }, function(err){
        if(err){
            return;
        }
        res.redirect('/forms');
    });
};