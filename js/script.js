// this function does this
var doCoolStuff = function() {
    var currentClassName = document.getElementById('cool').className;
    // changing class name
    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red';
    } else {
        document.getElementById('cool').className = 'cool';
    }
}

var sayMyName = function(name) {
    alert('My name is  ' + name)
}

var car = {
    make: 'VW',
    type: 'Polo',
    color: 'blue',
    isTurnedOn: false,
    nubmerOfWheels: 4,
    seats: ['seat1',
    'seat2',
    'seat3',
    'seat4'],
    turnedOn: function () {
        this.isTurnedOn = true;
    },
    fly: function() {
        alert('fly');
    },
    switchCar: function(isOn) {
        console.log('turn Car ' + isOn);
        if (isOn == true) {
            this.isTurnedOn = true;
        } else this.isTurnedOn = false;
    }
};
console.log('hello there friends!');