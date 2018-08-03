'use strict';

// shared instance of bootstraped jquery for entity and git dialogs
let $ = window.cwrcQuery
if ($ === undefined) {
    let prevJQuery = window.jQuery
    $ = require('jquery')
    window.jQuery = $
    require('bootstrap')
    window.jQuery = prevJQuery
    window.cwrcQuery = $
}


var Cookies = require('js-cookie');

// var cwrcAppName = "CWRC-GitWriter" + "-web-app";
var blankTEIDoc = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-model href="https://cwrc.ca/schemas/cwrc_tei_lite.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>
<?xml-stylesheet type="text/css" href="https://cwrc.ca/templates/css/tei.css"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:cw="http://cwrc.ca/ns/cw#" xmlns:w="http://cwrctc.artsrn.ualberta.ca/#">
	<text>
		<body>
			<div>
				<head>
					<title>Replace with your title</title>
				</head>
				<p>Replace with your text</p>
			</div>
		</body>
	</text>
</TEI>`;

let dialogs = {
    
}

dialogs.save = function(writer){
}

dialogs.load = function(writer){
}

dialogs.authenticate = function(){ 
}

module.exports = dialogs