const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

const output = document.getElementById("output");
output.publish = function (arg) {
    this.innerHTML = JSON.stringify(arg);
};

const button_push = document.getElementById("button_push");
button_push.addEventListener("click", push);

const button_indexOf = document.getElementById("button_indexOf");
button_indexOf.addEventListener("click", indexOf);

const button_includes = document.getElementById("button_includes");
button_includes.addEventListener("click", includes);

const button_slice = document.getElementById("button_slice");
button_slice.addEventListener("click", slice);

const button_splice = document.getElementById("button_splice");
button_splice.addEventListener("click", splice);

const button_of = document.getElementById("button_of");
button_of.addEventListener("click", of);

const button_map = document.getElementById("button_map");
button_map.addEventListener("click", map);

const button_filter = document.getElementById("button_filter");
button_filter.addEventListener("click", filter);

const button_split = document.getElementById("button_split");
button_split.addEventListener("click", split);

const button_join = document.getElementById("button_join");
button_join.addEventListener("click", join );

const button_some = document.getElementById("button_some");
button_some.addEventListener("click", some );

const button_reverse = document.getElementById("button_reverse");
button_reverse.addEventListener("click", reverse );

const button_spread = document.getElementById("button_spread");
button_spread.addEventListener("click", spread );

const button_reduce = document.getElementById("button_reduce");
button_reduce.addEventListener("click", reduce );

function push() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    [i1].push([i2]);
    output.publish([i1]);
}

function indexOf() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    output.publish([i1].indexOf(i2));
}

function includes() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    output.publish([i1].includes(i2));
}

function slice() {
    const i1 = eval(input1.value);
    const start = eval(input2.value);
    output.publish([i1].slice(start));
}

function splice() {
    const i1 = eval(input1.value);
    const start = eval(input2.value);
    const deleteCount = eval(input3.value);
    output.publish([i1].splice(start, deleteCount));
}

function of() {
    const i1 = eval(input1.value);
    output.publish([i1]);
}

function map() {
    const i1 = eval(input1.value);
    const mappedArray = [i1].map(item => item * 2);
    output.publish(mappedArray);
}

function filter() {
    const i1 = eval(input1.value);
    const filteredArray = [i1].filter(item => item * 2);
    output.publish(filteredArray);
}

function split() {
    const inputString = input1.value;
    const delimiter = input2.value;
    const splitArray = inputString.split(delimiter);
    output.publish(splitArray);
}

function join() {
    const i1 = eval(input1.value);
    const separator = input2.value;
    const joinedString = [i1].join(separator);
    output.publish(joinedString);
}

function some() {
    const i1 = eval(input1.value);
    const condition = item => item * 2;
    const result = [i1].some(condition);
    output.publish(result);
}

function reverse() {
    const i1 = eval(input1.value);
    const reversedArray = [i1].reverse();
    output.publish(reversedArray);
}

function spread() {
    const i1 = eval(input1.value);
    const newArray = [i1];
    output.publish(newArray);
}

function reduce() {
    const i1 = eval(input1.value);
    const result = [i1].reduce((acc, curr) => acc + curr, 0);
    output.publish(result);
}
