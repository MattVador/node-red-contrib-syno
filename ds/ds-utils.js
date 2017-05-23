function provideReferences(RED, name, references) {
    var keysReferences = Object.keys(references);

    // Provide list of methods
    RED.httpAdmin.get('/syno/' + name + '/references', function(req, res, next){
        var arr = {};
        for( var g in keysReferences ) {
            arr[keysReferences[g]] = Object.keys(references[keysReferences[g]]);
        }
        res.end(JSON.stringify(arr));
        return;
    });

    // Returns infos for a given method reference.
    RED.httpAdmin.get('/syno/' + name + '/references/:reference', function(req, res, next){
        var ref = req.params.reference;
        var arr = {};

        for( var g in keysReferences ) {
            if( references[keysReferences[g]][ref] != null ) {
                arr = references[keysReferences[g]][ref];
                break;
            }
        }

        res.end(JSON.stringify(arr));
        return;
    });
}

module.exports.provideReferences = provideReferences;