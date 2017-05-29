/*
	Problem:
	Suppose we could access yesterday's stock prices as an array, where:

	The values are the price in dollars of Apple stock.
	A higher index indicates a later time.
	So if the stock cost $500 at 10:30am and $550 at 11:00am, then:

	stockPricesYesterday[60] = 500;

	Write an efficient function that takes stockPricesYesterday and returns the best 
	profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

	Example:
		var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

		getMaxProfit(stockPricesYesterday);
		// returns 6 (buying for $5 and selling for $11)

	No "shorting"—you must buy before you sell. 
	You may not buy and sell in the same time step (at least 1 minute must pass).
*/

/*
	Solution #1 - Brute Force - O(n2)
	Iterate through all starting prices and then selling price.
	Requires two loops which yields the complexity to O(n2)
*/
function getMaxProfit(arr) {
	var max_profit = -1*Number.MAX_VALUE;

	for(var i=0; i<arr.length; i++){

		for(var j=i+1; j<arr.length; j++){
			max_profit = Math.max( arr[j] - arr[i], max_profit );
		}
	}
	return max_profit;
}

var stockPricesYesterday = [12, 11, 10, 9, 8, 7];
console.log("brute force:", getMaxProfit(stockPricesYesterday));

/*
	Solution #2 - Greedy - O(n)
	Greedy algorithms tend to use one pass and compute the best solution so far,
	updating some variables (maxProfit and minPrice here) each iteration.
*/
function getMaxProfit_greedy(arr) {

	var min_price = arr[0];	
	var max_profit = arr[1] - arr[0];

	if(arr.length<2){
		throw new Error("Minimum 2 prices needed to make profit.");
	}

	for(var i=1; i<arr.length; i++){

		var potential_profit = arr[i] - min_price;

		max_profit = Math.max(potential_profit, max_profit);

		min_price = Math.min(arr[i], min_price);

	}
	return max_profit;
}

console.log("greedy:", getMaxProfit_greedy(stockPricesYesterday));