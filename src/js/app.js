import jquery from 'jquery';

(function($){
    var  fruit = [
        { name: 'Banana' },
        { name: 'Apple' }
    ];

    var h2 = $('h2');

    fruit.forEach((item) => {
        h2.after(`<p> ${item.name} </p>`);
    });


})(jquery);