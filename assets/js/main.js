

        // Gallery Masonary
        $(window).on('load',function() {
            // init Isotope
            var $grid = $('.masonary-gallery').isotope({
                itemSelector: '.masonary-item',
                // layoutMode: 'fitRows',
                masonry: {
                    columnWidth: 0,
                }
            });
            
            // filter functions
            var filterFns = {
                // show if number is greater than 50
                numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
                },
            };
            
            // bind filter button click
            $('.gallery-filter').on( 'click', 'li', function() {
                var filterValue = $( this ).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[ filterValue ] || filterValue;
                $grid.isotope({ filter: filterValue });
            });
            
            
            // change is-checked class on buttons
            $('.gallery-filter').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'li', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
                });
            });
        });

