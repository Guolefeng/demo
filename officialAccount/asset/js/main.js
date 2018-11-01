var addTouchEvent = function () {
    var praise = document.querySelector('#cf-praise');
    var icon = document.querySelector('#cfp-icon');
    var count = document.querySelector('#cfp-count');
    var active = false;
    praise.ontouchend = function () {
        active = !active;
        if (active) {
            icon.classList.add('active-praise');
            count.innerHTML = parseInt(count.innerHTML) + 1 + '';
        }
        else {
            icon.classList.remove('active-praise');
            count.innerHTML = parseInt(count.innerHTML) - 1 + '';
        }
    };
};
addTouchEvent();