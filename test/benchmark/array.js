var array = $R(1, 1000).toArray();
var valueArray = [
  undefined, 'A', undefined, 'B', null, 'C',
  undefined, 'A', undefined, 'B', null, 'C',
  undefined, 'A', undefined, 'B', null, 'C',
  undefined, 'A', undefined, 'B', null, 'C',
  undefined, 'A', undefined, 'B', null, 'C',
  undefined, 'A', undefined, 'B', null, 'C',
  undefined, 'A', undefined, 'B', null, 'C',
  undefined, 'A', undefined, 'B', null, 'C',
  undefined, 'A', undefined, 'B', null, 'C',
  undefined, 'A', undefined, 'B', null, 'C',
  undefined, 'A', undefined, 'B', null, 'C',
  undefined, 'A', undefined, 'B', null, 'C'
];
var nestedArray = ['frank', ['bob', 'lisa'], ['jill', ['tom', 'sally', ['frank', ['bob', 'lisa'], ['jill', ['tom', 'sally']]]]]];
var obj = {0:0, 1:1, 2:2, 3:3, 4:4, 5:5, length:6};

Benchmark.add("$A", 10000, function() {
  $A(obj);
});

Benchmark.add("$w", 10000, function() {
  $w("1 2 3 4 5 6 7 8 9");
});

Benchmark.add("Array#compact", 1000, function() {
  valueArray.compact();
});

Benchmark.add("Array#flatten", 1000, function() {
  nestedArray.flatten();
});

Benchmark.add("Array#without", 100, function() {
  array.without(500);
});

Benchmark.add("Array#each", 1000, function() {
  array.each(Prototype.K);
});

Benchmark.add("Array#eachSlice", 1000, function() {
  array.eachSlice(5, Prototype.K);
});

Benchmark.add("Array#every", 1000, function() {
  array.every();
});

Benchmark.add("Array#all", 1000, function() {
  array.all();
});

Benchmark.add("Array#any", 1000, function() {
  array.any(function(x) { return x < 0; });
});

Benchmark.add("Array#some", 1000, function() {
  array.some(function(x) { return x < 0; });
});

Benchmark.add("Array#map", 1000, function() {
  array.map();
});

Benchmark.add("Array#collect", 1000, function() {
  array.map();
});

Benchmark.add("Array#detect", 1000, function() {
  array.detect(function(x) { return x === 999; });
})

Benchmark.add("Array#filter", 1000, function() {
  array.filter(Prototype.K);
});

Benchmark.add("Array#findAll", 1000, function() {
  array.findAll(Prototype.K);
});

Benchmark.add("Array#select", 1000, function() {
  array.select(Prototype.K);
});

Benchmark.add("Array#include", 1000, function() {
  array.include(999);
});

Benchmark.add("Array#member", 1000, function() {
  array.member(999);
});

Benchmark.add("Array#inject", 1000, function() {
  array.inject(0, function(acc, n) { return acc + n; });
});