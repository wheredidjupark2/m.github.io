var ContactPage = function() {

    return {

        //Basic Map
        initMap: function() {
            var map;
            $(document).ready(function() {
                map = new GMaps({
                    div: '#map',
                    scrollwheel: false,
                    lat: 33.8510675,
                    lng: -117.9163481
                });

                var marker = map.addMarker({
                    lat: 33.8510675,
                    lng: -117.9163481,
                    title: 'BKT United'
                });
            });
        },

        //Panorama Map
        initPanorama: function() {
            var panorama;
            $(document).ready(function() {
                panorama = GMaps.createPanorama({
                    el: '#panorama',
                    lat: 33.8510675,
                    lng: -117.9163481
                });
            });
        }

    };
}();
