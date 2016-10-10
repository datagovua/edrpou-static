SystemJS.config({
  nodeConfig: {
    "paths": {
      "src/": "src/"
    }
  },
  devConfig: {
    "map": {
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.11"
    },
    "packages": {
      "npm:babel-helper-builder-react-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0",
          "babel-types": "npm:babel-types@6.8.1",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@3.10.1"
        }
      },
      "npm:babel-plugin-syntax-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      },
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.8.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
          "babel-runtime": "npm:babel-runtime@6.9.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "src": {
      "main": "app.js"
    },
    "github:apollostack:apollo-react@ssr-api": {
      "main": "src/index",
      "transpiler": "typescript"
    }
  },
  meta: {
    "*.js": {
      "babelOptions": {
        "plugins": [
          "babel-plugin-transform-react-jsx",
          "babel-plugin-transform-class-properties"
        ]
      }
    },
    "npm:apollo-client@0.4.12/networkInterface.js": {
      "globals": {
        "fetch": "npm:isomorphic-fetch@2.2.1"
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "apollo-client": "npm:apollo-client@0.4.12",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel": "npm:babel@5.8.38",
    "babel-core": "npm:babel-core@5.8.38",
    "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.8.0",
    "babel-types": "npm:babel-types@6.8.1",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.0",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "classnames": "npm:classnames@2.2.5",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.7",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
    "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "es6-promise": "npm:es6-promise@3.2.1",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "express": "npm:express@4.13.4",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "fsevents": "npm:fsevents@1.0.14",
    "graphql-tag": "npm:graphql-tag@0.1.14",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.0",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "proxy-middleware": "npm:proxy-middleware@0.15.0",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "react": "npm:react@15.3.1",
    "react-apollo": "npm:react-apollo@0.5.6",
    "react-dom": "npm:react-dom@15.3.1",
    "react-helmet": "npm:react-helmet@3.1.0",
    "react-list": "npm:react-list@0.7.18",
    "react-router": "npm:react-router@2.4.0",
    "react-search-bar": "npm:react-search-bar@1.1.4",
    "readline": "github:jspm/nodelibs-readline@0.2.0-alpha",
    "redux": "npm:redux@3.5.2",
    "repl": "github:jspm/nodelibs-repl@0.2.0-alpha",
    "searchkit": "npm:searchkit@0.10.1",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "tweetnacl": "npm:tweetnacl@0.13.3",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.4.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:accepts@1.2.13": {
      "map": {
        "mime-types": "npm:mime-types@2.1.11",
        "negotiator": "npm:negotiator@0.5.3"
      }
    },
    "npm:apollo-client@0.4.12": {
      "map": {
        "es6-promise": "npm:es6-promise@3.2.1",
        "graphql": "npm:graphql@0.5.0",
        "lodash.assign": "npm:lodash.assign@4.0.9",
        "lodash.clonedeep": "npm:lodash.clonedeep@4.3.2",
        "lodash.forown": "npm:lodash.forown@4.2.0",
        "lodash.has": "npm:lodash.has@4.4.0",
        "lodash.includes": "npm:lodash.includes@4.1.3",
        "lodash.isarray": "npm:lodash.isarray@4.0.0",
        "lodash.isboolean": "npm:lodash.isboolean@3.0.3",
        "lodash.isnull": "npm:lodash.isnull@3.0.0",
        "lodash.isnumber": "npm:lodash.isnumber@3.0.3",
        "lodash.isobject": "npm:lodash.isobject@3.0.2",
        "lodash.isstring": "npm:lodash.isstring@4.0.1",
        "lodash.isundefined": "npm:lodash.isundefined@3.0.1",
        "redux": "npm:redux@3.5.2",
        "symbol-observable": "npm:symbol-observable@0.2.4",
        "lodash.flatten": "npm:lodash.flatten@4.2.0",
        "lodash.isequal": "npm:lodash.isequal@4.2.0",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
        "lodash.pick": "npm:lodash.pick@4.4.0",
        "lodash.mapvalues": "npm:lodash.mapvalues@4.6.0",
        "lodash.merge": "npm:lodash.merge@4.6.0",
        "graphql-tag": "npm:graphql-tag@0.1.14",
        "lodash.countby": "npm:lodash.countby@4.6.0",
        "lodash.identity": "npm:lodash.identity@3.0.0"
      }
    },
    "npm:babel-code-frame@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.0",
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.0"
      }
    },
    "npm:babel-plugin-syntax-class-properties@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.0"
      }
    },
    "npm:babel-plugin-transform-class-properties@6.8.0": {
      "map": {
        "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.0"
      }
    },
    "npm:babel-runtime@6.9.0": {
      "map": {
        "core-js": "npm:core-js@2.4.0"
      }
    },
    "npm:babel-traverse@6.8.0": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.8.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.0",
        "babel-types": "npm:babel-types@6.8.1",
        "babylon": "npm:babylon@6.8.0",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-types@6.8.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.0",
        "babel-traverse": "npm:babel-traverse@6.8.0",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babylon@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.3.1",
        "inherits": "npm:inherits@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.9",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:express@4.13.4": {
      "map": {
        "accepts": "npm:accepts@1.2.13",
        "array-flatten": "npm:array-flatten@1.1.1",
        "content-disposition": "npm:content-disposition@0.5.1",
        "content-type": "npm:content-type@1.0.2",
        "cookie": "npm:cookie@0.1.5",
        "cookie-signature": "npm:cookie-signature@1.0.6",
        "debug": "npm:debug@2.2.0",
        "depd": "npm:depd@1.1.0",
        "escape-html": "npm:escape-html@1.0.3",
        "etag": "npm:etag@1.7.0",
        "finalhandler": "npm:finalhandler@0.4.1",
        "fresh": "npm:fresh@0.3.0",
        "merge-descriptors": "npm:merge-descriptors@1.0.1",
        "methods": "npm:methods@1.1.2",
        "on-finished": "npm:on-finished@2.3.0",
        "parseurl": "npm:parseurl@1.3.1",
        "path-to-regexp": "npm:path-to-regexp@0.1.7",
        "proxy-addr": "npm:proxy-addr@1.0.10",
        "qs": "npm:qs@4.0.0",
        "range-parser": "npm:range-parser@1.0.3",
        "send": "npm:send@0.13.1",
        "serve-static": "npm:serve-static@1.10.2",
        "type-is": "npm:type-is@1.6.12",
        "utils-merge": "npm:utils-merge@1.0.0",
        "vary": "npm:vary@1.0.1"
      }
    },
    "npm:finalhandler@0.4.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "escape-html": "npm:escape-html@1.0.3",
        "on-finished": "npm:on-finished@2.3.0",
        "unpipe": "npm:unpipe@1.0.0"
      }
    },
    "npm:graphql@0.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:history@2.1.1": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "invariant": "npm:invariant@2.2.1",
        "query-string": "npm:query-string@3.0.3",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:http-errors@1.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "statuses": "npm:statuses@1.2.1"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:lodash._baseiteratee@4.7.0": {
      "map": {
        "lodash._stringtopath": "npm:lodash._stringtopath@4.8.0"
      }
    },
    "npm:lodash._stringtopath@4.8.0": {
      "map": {
        "lodash._basetostring": "npm:lodash._basetostring@4.12.0"
      }
    },
    "npm:lodash.assign@4.0.9": {
      "map": {
        "lodash.keys": "npm:lodash.keys@4.0.7",
        "lodash.rest": "npm:lodash.rest@4.0.3"
      }
    },
    "npm:lodash.clonedeep@4.3.2": {
      "map": {
        "lodash._baseclone": "npm:lodash._baseclone@4.5.7"
      }
    },
    "npm:lodash.forown@4.2.0": {
      "map": {
        "lodash._basefor": "npm:lodash._basefor@3.0.3",
        "lodash._baseiteratee": "npm:lodash._baseiteratee@4.7.0",
        "lodash.keys": "npm:lodash.keys@4.0.7"
      }
    },
    "npm:lodash.has@4.4.0": {
      "map": {
        "lodash._stringtopath": "npm:lodash._stringtopath@4.8.0"
      }
    },
    "npm:lodash.includes@4.1.3": {
      "map": {
        "lodash.keys": "npm:lodash.keys@4.0.7"
      }
    },
    "npm:lodash.isequal@4.2.0": {
      "map": {
        "lodash._root": "npm:lodash._root@3.0.1",
        "lodash.keys": "npm:lodash.keys@4.0.7"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:mime-types@2.1.11": {
      "map": {
        "mime-db": "npm:mime-db@1.23.0"
      }
    },
    "npm:on-finished@2.3.0": {
      "map": {
        "ee-first": "npm:ee-first@1.1.1"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.8.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:proxy-addr@1.0.10": {
      "map": {
        "forwarded": "npm:forwarded@0.1.0",
        "ipaddr.js": "npm:ipaddr.js@1.0.5"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:query-string@3.0.3": {
      "map": {
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:react-redux@4.4.5": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.6",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@4.13.1",
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:react-router@2.4.0": {
      "map": {
        "history": "npm:history@2.1.1",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.0.6",
        "invariant": "npm:invariant@2.2.1",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:redux@3.5.2": {
      "map": {
        "lodash": "npm:lodash@4.13.1",
        "lodash-es": "npm:lodash-es@4.13.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "symbol-observable": "npm:symbol-observable@0.2.4"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:send@0.13.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "depd": "npm:depd@1.1.0",
        "destroy": "npm:destroy@1.0.4",
        "escape-html": "npm:escape-html@1.0.3",
        "etag": "npm:etag@1.7.0",
        "fresh": "npm:fresh@0.3.0",
        "http-errors": "npm:http-errors@1.3.1",
        "mime": "npm:mime@1.3.4",
        "ms": "npm:ms@0.7.1",
        "on-finished": "npm:on-finished@2.3.0",
        "range-parser": "npm:range-parser@1.0.3",
        "statuses": "npm:statuses@1.2.1"
      }
    },
    "npm:serve-static@1.10.2": {
      "map": {
        "escape-html": "npm:escape-html@1.0.3",
        "parseurl": "npm:parseurl@1.3.1",
        "send": "npm:send@0.13.1"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:type-is@1.6.12": {
      "map": {
        "media-typer": "npm:media-typer@0.3.0",
        "mime-types": "npm:mime-types@2.1.11"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:warning@2.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.6.1",
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:react-apollo@0.5.6": {
      "map": {
        "invariant": "npm:invariant@2.2.1",
        "lodash.isobject": "npm:lodash.isobject@3.0.2",
        "object-assign": "npm:object-assign@4.1.0",
        "lodash.isequal": "npm:lodash.isequal@4.2.0",
        "lodash.flatten": "npm:lodash.flatten@4.2.0",
        "react-redux": "npm:react-redux@4.4.5",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "recompose": "npm:recompose@0.20.2"
      }
    },
    "npm:lodash.flatten@4.2.0": {
      "map": {
        "lodash._baseflatten": "npm:lodash._baseflatten@4.2.1"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:react-helmet@3.1.0": {
      "map": {
        "react-side-effect": "npm:react-side-effect@1.0.2",
        "deep-equal": "npm:deep-equal@1.0.1",
        "shallowequal": "npm:shallowequal@0.2.2",
        "object-assign": "npm:object-assign@4.1.0",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:shallowequal@0.2.2": {
      "map": {
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:react-side-effect@1.0.2": {
      "map": {
        "fbjs": "npm:fbjs@0.1.0-alpha.10"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    },
    "npm:fbjs@0.1.0-alpha.10": {
      "map": {
        "core-js": "npm:core-js@1.2.7",
        "promise": "npm:promise@7.1.1",
        "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
      }
    },
    "npm:babel@5.8.38": {
      "map": {
        "babel-core": "npm:babel-core@5.8.38",
        "convert-source-map": "npm:convert-source-map@1.3.0",
        "commander": "npm:commander@2.9.0",
        "fs-readdir-recursive": "npm:fs-readdir-recursive@0.1.2",
        "chokidar": "npm:chokidar@1.6.0",
        "path-exists": "npm:path-exists@1.0.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "output-file-sync": "npm:output-file-sync@1.1.2",
        "lodash": "npm:lodash@3.10.1",
        "slash": "npm:slash@1.0.0",
        "glob": "npm:glob@5.0.15",
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:chokidar@1.6.0": {
      "map": {
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "glob-parent": "npm:glob-parent@2.0.0",
        "anymatch": "npm:anymatch@1.3.0",
        "async-each": "npm:async-each@1.0.1",
        "is-glob": "npm:is-glob@2.0.1",
        "readdirp": "npm:readdirp@2.1.0"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:glob@5.0.15": {
      "map": {
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "inflight": "npm:inflight@1.0.5",
        "once": "npm:once@1.4.0",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:output-file-sync@1.1.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "graceful-fs": "npm:graceful-fs@4.1.6"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:readdirp@2.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.6",
        "minimatch": "npm:minimatch@3.0.3",
        "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:anymatch@1.3.0": {
      "map": {
        "arrify": "npm:arrify@1.0.1",
        "micromatch": "npm:micromatch@2.3.11"
      }
    },
    "npm:inflight@1.0.5": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.6.0"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:fsevents@1.0.14": {
      "map": {
        "nan": "npm:nan@2.4.0",
        "node-pre-gyp": "npm:node-pre-gyp@0.6.30"
      }
    },
    "npm:micromatch@2.3.11": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "filename-regex": "npm:filename-regex@2.0.0",
        "array-unique": "npm:array-unique@0.2.1",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "extglob": "npm:extglob@0.3.2",
        "normalize-path": "npm:normalize-path@2.0.1",
        "arr-diff": "npm:arr-diff@2.0.0",
        "object.omit": "npm:object.omit@2.0.0",
        "braces": "npm:braces@1.8.5",
        "kind-of": "npm:kind-of@3.0.4",
        "regex-cache": "npm:regex-cache@0.4.3",
        "parse-glob": "npm:parse-glob@3.0.4"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:node-pre-gyp@0.6.30": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "nopt": "npm:nopt@3.0.6",
        "npmlog": "npm:npmlog@4.0.0",
        "tar-pack": "npm:tar-pack@3.1.4",
        "rc": "npm:rc@1.1.6",
        "tar": "npm:tar@2.2.1",
        "rimraf": "npm:rimraf@2.5.4",
        "semver": "npm:semver@5.3.0",
        "request": "npm:request@2.74.0"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "is-dotfile": "npm:is-dotfile@1.0.2",
        "glob-base": "npm:glob-base@0.3.0"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.0.1"
      }
    },
    "npm:object.omit@2.0.0": {
      "map": {
        "for-own": "npm:for-own@0.1.4",
        "is-extendable": "npm:is-extendable@0.1.1"
      }
    },
    "npm:braces@1.8.5": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "preserve": "npm:preserve@0.2.0",
        "expand-range": "npm:expand-range@1.8.2"
      }
    },
    "npm:kind-of@3.0.4": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.4"
      }
    },
    "npm:regex-cache@0.4.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0",
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3"
      }
    },
    "npm:tar-pack@3.1.4": {
      "map": {
        "once": "npm:once@1.3.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "rimraf": "npm:rimraf@2.5.4",
        "tar": "npm:tar@2.2.1",
        "uid-number": "npm:uid-number@0.0.6",
        "debug": "npm:debug@2.2.0",
        "fstream-ignore": "npm:fstream-ignore@1.0.5",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "ini": "npm:ini@1.3.4",
        "strip-json-comments": "npm:strip-json-comments@1.0.4",
        "deep-extend": "npm:deep-extend@0.4.1"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.0.6"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "glob-parent": "npm:glob-parent@2.0.0",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:npmlog@4.0.0": {
      "map": {
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "set-blocking": "npm:set-blocking@2.0.0",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
        "gauge": "npm:gauge@2.6.0"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.0.9"
      }
    },
    "npm:for-own@0.1.4": {
      "map": {
        "for-in": "npm:for-in@0.1.5"
      }
    },
    "npm:glob@7.0.6": {
      "map": {
        "inflight": "npm:inflight@1.0.5",
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "fs.realpath": "npm:fs.realpath@1.0.0"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "npm:are-we-there-yet@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:fstream-ignore@1.0.5": {
      "map": {
        "fstream": "npm:fstream@1.0.10",
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:request@2.74.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "caseless": "npm:caseless@0.11.0",
        "extend": "npm:extend@3.0.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "qs": "npm:qs@6.2.1",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "http-signature": "npm:http-signature@1.1.1",
        "mime-types": "npm:mime-types@2.1.11",
        "bl": "npm:bl@1.1.2",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "har-validator": "npm:har-validator@2.0.6",
        "aws4": "npm:aws4@1.4.1",
        "node-uuid": "npm:node-uuid@1.4.7",
        "stringstream": "npm:stringstream@0.0.5",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "form-data": "npm:form-data@1.0.1",
        "hawk": "npm:hawk@3.1.3",
        "tough-cookie": "npm:tough-cookie@2.3.1"
      }
    },
    "npm:gauge@2.6.0": {
      "map": {
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "object-assign": "npm:object-assign@4.1.0",
        "has-color": "npm:has-color@0.1.7",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "has-unicode": "npm:has-unicode@2.0.1",
        "aproba": "npm:aproba@1.0.4",
        "signal-exit": "npm:signal-exit@3.0.1",
        "string-width": "npm:string-width@1.0.2",
        "wide-align": "npm:wide-align@1.1.0"
      }
    },
    "npm:fstream@1.0.10": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.6",
        "inherits": "npm:inherits@2.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.5.4"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "isobject": "npm:isobject@2.1.0",
        "is-number": "npm:is-number@2.1.0",
        "randomatic": "npm:randomatic@1.1.5",
        "repeat-string": "npm:repeat-string@1.5.4"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:bl@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "commander": "npm:commander@2.9.0",
        "chalk": "npm:chalk@1.1.3",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "is-my-json-valid": "npm:is-my-json-valid@2.13.1"
      }
    },
    "npm:form-data@1.0.1": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.11",
        "async": "npm:async@2.0.1"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "code-point-at": "npm:code-point-at@1.0.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0"
      }
    },
    "npm:wide-align@1.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.2.0",
        "jsprim": "npm:jsprim@1.3.0",
        "sshpk": "npm:sshpk@1.10.0"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.0.4"
      }
    },
    "npm:randomatic@1.1.5": {
      "map": {
        "is-number": "npm:is-number@2.1.0",
        "kind-of": "npm:kind-of@3.0.4"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "cryptiles": "npm:cryptiles@2.0.5",
        "sntp": "npm:sntp@1.0.9",
        "boom": "npm:boom@2.10.1",
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:sshpk@1.10.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "getpass": "npm:getpass@0.1.6",
        "asn1": "npm:asn1@0.2.3",
        "dashdash": "npm:dashdash@1.14.0"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:jsprim@1.3.0": {
      "map": {
        "json-schema": "npm:json-schema@0.2.2",
        "extsprintf": "npm:extsprintf@1.0.2",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:async@2.0.1": {
      "map": {
        "lodash": "npm:lodash@4.15.0"
      }
    },
    "npm:is-my-json-valid@2.13.1": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "generate-function": "npm:generate-function@2.0.0",
        "jsonpointer": "npm:jsonpointer@2.0.0"
      }
    },
    "npm:code-point-at@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:bcrypt-pbkdf@1.0.0": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.3"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:dashdash@1.14.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:stream-http@2.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.4.1"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:react@15.3.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "loose-envify": "npm:loose-envify@1.2.0",
        "fbjs": "npm:fbjs@0.8.4"
      }
    },
    "npm:fbjs@0.8.4": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "immutable": "npm:immutable@3.8.1",
        "promise": "npm:promise@7.1.1",
        "core-js": "npm:core-js@1.2.7",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10"
      }
    },
    "npm:searchkit@0.10.1": {
      "map": {
        "bem-cn": "npm:bem-cn@1.3.1",
        "lodash": "npm:lodash@4.6.1",
        "axios": "npm:axios@0.10.0",
        "rc-slider": "npm:rc-slider@3.3.2",
        "es6-promise": "npm:es6-promise@3.2.1",
        "react": "npm:react@15.3.1",
        "history": "npm:history@2.1.2",
        "react-addons-update": "npm:react-addons-update@0.14.8",
        "qs": "github:ssetem/qs@6.0.1"
      }
    },
    "npm:axios@0.10.0": {
      "map": {
        "follow-redirects": "npm:follow-redirects@0.0.7"
      }
    },
    "npm:rc-slider@3.3.2": {
      "map": {
        "rc-util": "npm:rc-util@3.4.1",
        "classnames": "npm:classnames@2.2.5",
        "rc-tooltip": "npm:rc-tooltip@3.4.2",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:rc-util@3.4.1": {
      "map": {
        "classnames": "npm:classnames@2.2.5",
        "add-dom-event-listener": "npm:add-dom-event-listener@1.0.1",
        "shallowequal": "npm:shallowequal@0.2.2"
      }
    },
    "npm:history@2.1.2": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "invariant": "npm:invariant@2.2.1",
        "query-string": "npm:query-string@3.0.3",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:follow-redirects@0.0.7": {
      "map": {
        "stream-consume": "npm:stream-consume@0.1.0",
        "debug": "npm:debug@2.2.0"
      }
    },
    "npm:add-dom-event-listener@1.0.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:rc-tooltip@3.4.2": {
      "map": {
        "rc-trigger": "npm:rc-trigger@1.7.2"
      }
    },
    "npm:rc-trigger@1.7.2": {
      "map": {
        "rc-util": "npm:rc-util@3.4.1",
        "rc-align": "npm:rc-align@2.3.2",
        "rc-animate": "npm:rc-animate@2.3.1"
      }
    },
    "npm:rc-align@2.3.2": {
      "map": {
        "rc-util": "npm:rc-util@3.4.1",
        "dom-align": "npm:dom-align@1.5.2"
      }
    },
    "npm:rc-animate@2.3.1": {
      "map": {
        "css-animation": "npm:css-animation@1.3.0"
      }
    },
    "npm:css-animation@1.3.0": {
      "map": {
        "component-classes": "npm:component-classes@1.2.6"
      }
    },
    "npm:component-classes@1.2.6": {
      "map": {
        "component-indexof": "npm:component-indexof@0.0.3",
        "indexof": "npm:component-indexof@0.0.3"
      }
    },
    "npm:node-fetch@1.6.1": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:recompose@0.20.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.4",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "symbol-observable": "npm:symbol-observable@0.2.4",
        "change-emitter": "npm:change-emitter@0.1.2"
      }
    }
  }
});
