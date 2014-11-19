function harlem() {

}
angular.module("kasselCodeMeetup", [])
    .directive('harlemshake', function () {
        return {
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    $('img').effect( "shake" );
                });
            }
    };
});
