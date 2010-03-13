var Benchmark = {
  results: [],
  
  queue: [],
  
  add: function(name, iterations, fn) {
    this.queue.push([name, iterations, fn]);
  },
  
  runAll: function() {
    if (this.queue.length == 0) return;
    
    var next = this.queue.shift();
    this.run.apply(this, next);
    
    setTimeout(this.runAll.bind(this), 20);
  },
  
  run: function(name, iterations, fn) {
    var i = 0, start, end, diff, sum, min = -1, max = -1, times = [];
    
    for(; i < iterations; ++i) {
      start = (new Date).getTime();
      fn();
      end = (new Date).getTime();
      times.push(end - start);
    }
    
    this.log(name, iterations, times);
  },
  
  log: function(name, iterations, times) {
    var row = new Element("tr");
    row.insert(new Element("td").update(name));
    row.insert(new Element("td").update(iterations));
    
    times = times.sort(function(a,b){ return a - b;	});
		if (times.length % 2 == 0) {
			median = (times[(times.length/2)-1] + times[times.length/2]) / 2;
    }	else {
			median = times[(times.length/2)];
		}
    row.insert(new Element("td").update(median + "ms"));
    
    var sum = times.inject(0, function(acc, n) { return acc + n; });
    row.insert(new Element("td").update((sum / times.length) + "ms"));
    row.insert(new Element("td").update(times.min() + "ms"));
    row.insert(new Element("td").update(times.max() + "ms"));
    row.insert(new Element("td").update(sum + "ms"));

    $("log").insert(row);
  }
};

document.observe("dom:loaded", function() {
  var logtable = new Element("table", { id: "log", className: "logtable" });
  var headerrow = new Element("tr");
  headerrow.insert(new Element("th").update("Benchmark name"));
  headerrow.insert(new Element("th").update("Iterations"));
  headerrow.insert(new Element("th").update("Median"));
  headerrow.insert(new Element("th").update("Mean"));
  headerrow.insert(new Element("th").update("Min"));
  headerrow.insert(new Element("th").update("Max"));
  headerrow.insert(new Element("th").update("Total"));
  $("benchlog").insert(logtable.insert(headerrow));
  
  Benchmark.runAll();
});