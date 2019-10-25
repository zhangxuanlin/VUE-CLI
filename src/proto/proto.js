/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */


var $protobuf = require('protobufjs/light');

var $root = ($protobuf.roots.default || ($protobuf.roots.default = new $protobuf.Root()))
    .setOptions({
        java_package: 'com.uj.protocol',
        java_outer_classname: 'DemoBean',
    })
    .addJSON({
        DemoProto: {
            fields: {
                dbList: {
                    rule: 'repeated',
                    type: 'Points',
                    id: 1,
                },
            },
            nested: {
                Points: {
                    fields: {
                        points: {
                            rule: 'repeated',
                            type: 'Point',
                            id: 1,
                        },
                    },
                },
                Point: {
                    fields: {
                        tagSample: {
                            type: 'int64',
                            id: 1,
                        },
                        ai2val: {
                            type: 'double',
                            id: 2,
                        },
                        processStatus: {
                            type: 'int32',
                            id: 3,
                        },
                    },
                },
            },
        },
    });

module.exports = $root;
