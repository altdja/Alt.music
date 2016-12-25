function routes($stateProvider) {
    $stateProvider
        .state('homepage', {
            url: '/home',
            template: '<homepage></homepage>'
        });
}
routes.$inject = ['$stateProvider'];

export default routes;
