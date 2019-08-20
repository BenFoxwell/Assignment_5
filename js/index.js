// Delay code from executing until all DOM assets have been loaded
$(document).ready(function() {
    // When user clicks update button, run change background function
    $('#submit-btn').click(function() {
        //  Prevent a form submission
        event.preventDefault();
        // Store user input for city type
        var city = $('#city-type').val();
        // Create conditionals to control updating of background image depending on user input
        if(city === 'NYC' || city === 'New York' || city === 'New York City'){
            $('body').attr('class', 'nyc');
        } else if(city === 'San Francisco' || city === 'SF' || city === 'Bay Area'){
            $('body').attr('class', 'sf');
        } else if(city === 'Los Angeles' || city === 'LA' || city === 'LAX'){
            $('body').attr('class', 'la');
        } else if(city === 'Austin' || city === 'ATX'){
            $('body').attr('class', 'austin');
        } else if(city === 'Sydney' || city === 'SYD'){
            $('body').attr('class', 'sydney');
        // Make default class conditional for any input that doesnt meet conditionals
        } else {$('body').attr('class', 'default')} 
        // Reset user input field immediately after running .click function
        $('#city-type').val(''); 
        
        console.log(city);
    });












});