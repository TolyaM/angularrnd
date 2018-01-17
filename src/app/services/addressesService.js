var addressesFactory = function ($http, $httpParamSerializer, API_ADDRESSES, store, tokenService) {
    return {
        findAll: function() {
            return $http.get(tokenService.concatToken(API_ADDRESSES + '/api/addresses'));
        },
        findByID: function (Id) {
            return $http.get(tokenService.concatToken(API_ADDRESSES + '/api/address/' + Id));
        },
        updateAddress: function (id, address) {
            return $http.put(tokenService.concatToken(API_ADDRESSES  + '/api/address/' + id, address));
        }
    };
}
addressesFactory.$inject = ['$http', '$httpParamSerializer', 'API_ADDRESSES', 'store', 'tokenService'];

export default addressesFactory