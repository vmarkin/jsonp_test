
if (process.argv.length<=2) {
    console.log(process.argv.length);
    console.log('Add additional parameter:\n\t node build.js <json file>');
    return;
}

var json_file = process.argv[2];

var test=null;

try {
    test=require(json_file);
}
catch(err) {
    console.log('Can\'t load JSON file\n It is unreachable or unvalid.');
    return;
}

if (test["sample-categories"] == null) {
    console.log ('JSON file is not valid');
    return;
}

var apps=[];

for (var i=0; i< test["sample-categories"].length; i++) {
    var category_name = test["sample-categories"][i].caption;
    for (var j=0; j< test["sample-categories"][i].apps.length; j++) {
	test["sample-categories"][i].apps[j].category=new Array(category_name);
    }
}
for (var i=0; i< test["sample-categories"].length; i++) {
    apps=apps.concat(test["sample-categories"][i].apps);
}

console.log('samplesData(\n{\n\tversion:"0.0.2",\n\t"sample-apps":');
console.log(require('util').inspect(apps, false, null))
console.log('}\n);');


