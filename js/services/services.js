angular.module("listatelefonica").factory("operadorasAPI", function ($http){
    var _getOperadoras = function () {
        return $http.get("http://localhost/PROJETOANGULAR/operadoras.php");
    }
    return {
        getOperadoras: _getOperadoras
    }
});