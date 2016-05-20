var dataset1 = {"Makes": [
  {
    "make_id": "armstrong-siddeley",
    "make_display":"Armstrong Siddeley",
    "make_is_common":"0",
    "make_country":"UK"
  },
  {
    "make_id":"ascari",
    "make_display":"Ascari",
    "make_is_common":"0",    
	"make_country":"UK"
  },
  {
    "make_id":"aston-martin",
    "make_display":"Aston Martin",
    "make_is_common":"1",
    "make_country":"UK"
  },
  {
    "make_id":"austin",
    "make_display":"Austin",
    "make_is_common":"0",
    "make_country":"UK"
  },
  {
    "make_id":"austin-healey",
    "make_display":"Austin-Healey",
    "make_is_common":"0",
    "make_country":"UK"
  }
]};

var dataset2 = [
  {
    "country": "UK",
    "uncommon_makes": 4,
    "common_makes": 1
  }
];

var collateMakes = function(data){
	var countries = {};
	var output = [];

	for (var i in data.Makes){
		var countryName = data.Makes[i].make_country;

		if (!countries[countryName]){
			countries[countryName] = {country: countryName, uncommon_makes:0, common_makes:0};
		}

		if (data.Makes[i].make_is_common === "1"){
				countries[countryName].common_makes += 1;
			} else {
				countries[countryName].uncommon_makes += 1;
			}
	}

	for (var i in countries){
		output.push(countries[i]);
	}

	return output;
};

var testCollateMakes = function(actual, expected){
	if (JSON.stringify(collateMakes(actual))===JSON.stringify(expected)){
		return true; 
		} else {
			return false;
	}
}
collateMakes(dataset1);
console.log(testCollateMakes(dataset1, dataset2));