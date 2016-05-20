describe('Make Collated Table From Data', function(){

	it ('should be able to return JSON object from array data', function(){
		var arrayData = [
		  {
		    "country": "UK",
		    "uncommon_makes": 4,
		    "common_makes": 1
		  }
		];

		collateMakes(arrayData);

		expect();
	});

	it ('should be able to return JSON  object from object data', function(){
		
		var objectData = {"Makes": [
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

		collateMakes(objectData);
		
		expect();
	});
});	