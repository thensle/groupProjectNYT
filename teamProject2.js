$(document).ready(function() {

//Front-end parameters are search terms, number of entries returned, these are optional: start year, end year

	//Query parameters 

	// base: "https://api.nytimes.com/svc/search/v2/articlesearch.json"
	// search by term: "?q=" + userSearchTerm
	// Number of records: response.meta.hits + userparameter

	// Optional Start/End Dates - Formatt is YYYYMMDD
	//If year is the only parameter, must append + "0000" to send out to AJAX

	//What's returned - paths to the data in the results panel

	//Title of Article, author, and URL

	//Title: response.docs.headline.main
	//Author: 
		//first name: response.docs.byline.person.firstname
		// last nameresponse.docs.byline.person.lastname
	///URL: response.docs.web_url
	//Search term variables
	var searchTerm = searchTerm;
	var numberResults;
	var startDate = startDate + "0101";
	var endDate = endDate + "1231";
	var startExist = false;
	var endExist = false;


		// var searchTerm = searchTerm.trim();
		// var numberResults;
		// var startDate = startDate.append("0101");
		// var endDate = endDate.append("1231");
		// var startExist = false;
		// var endExist = false;

	//For now, assume user is relatively intelligent
	var optionalStart = $(this).val().append("0101") || 'default value'
	var optionalEnd = $(this).val().append("1231") || 'default value'



	var searchQuery = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + "?q=" + searchTerm + "?begin_date=" + optionalStart + "?end_date=" + optionalEnd + "api-key=313831eff9ee4f8aaac1ec44eb33768b";
	//if it doesn't work, try to delete equal sign from api
	$(".search.button").on("click," function(){
			$.ajax({
				url: searchQuery,
				method: "GET"
			}).done(function(response){
				console.log(response);
				
				//Title: response.docs.headline.main
				//Author: 
					//first name: response.docs.byline.person.firstname
					// last nameresponse.docs.byline.person.lastname
				///URL: response.docs.web_url
			});

};
});

