angular.module("listatelefonica").controller("listatelefonicaCtrl", function ($scope, $filter, lowercaseFilter, operadorasAPI) {
    $scope.app = 'lista telefonica';
    $scope.contatos = [
         {nome: $filter('uppercase')("Zé"), telefone: "40938453094", cor: "blue", data: new Date(), operadora : {nome: 'Oi', codigo: '31', categoria: "fixo"}},
         {nome: lowercaseFilter("Xu"), telefone: "234203-4923", cor: "yellow", data: new Date(), operadora : {nome: 'tim', codigo: '41', categoria: "celular"}},
         {nome: "Orixu", telefone: "2342323423", cor: "red", data: new Date(), operadora : {nome: 'claro', codigo: '21', categoria: "celular"}}
    ];
    $scope.adicionarContato = function (contato) {
       $scope.contatos.push(contato);
       delete $scope.contato;
       $scope.contatoForm.$setPristine();
    };
    $scope.operadoras = [];

    var pegarOperadoras = function () {
        operadorasAPI.getOperadoras(). then(function (response) {
            $scope.operadoras = response.data;
        }) .catch( function (error) {
            console.log(error);
        });
    };

    // function info_indicadores(indicador, cb_success, cb_error) {
    //     $http.post(`${base_url}/info_indicador_detalhado.php`, indicador).then(cb_success).catch(cb_error);
    // }


    pegarOperadoras();

    $scope.apagarContato = function (contatos) {
        $scope.contatos = contatos.filter( function (contato) {
            if (!contato.selecionado) return contato;
        });
    }
    $scope.contatoSelecionado = function (contatos) {
        return contatos.some( function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarpor = function (campo) {
        $scope.criterioordenacao = campo;
        $scope.tipoOrdenacao = !$scope.tipoOrdenacao;
    };
 });