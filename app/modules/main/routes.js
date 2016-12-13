function routes($stateProvider) {
  $stateProvider
    .state('mainpage', {
      url: 'home',
      tempalate: '<main></main>'
    })
}
routes.$inject = ['$stateProvider'];

export default routes;
