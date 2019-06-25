//控制层
app.controller('brandController', function ($scope, $http,$controller,brandService) {
    //继承--上边函数中也必须引用
    $controller('baseController',{$scope:$scope});
    //查询品牌列表
    $scope.findAll = function () {
        brandService.findAll().success(function (response) {
            $scope.list = response;
        });
    };

    //分页
    $scope.findPage = function (page, size) {
        brandService.findPage(page, size).success(function (response) {
            $scope.list = response.rows;
            $scope.paginationConf.totalItems = response.total;
        })
    };
    //新增
    $scope.save = function () {
        var object = null;
        if ($scope.entity.id != null) {
            object = brandService.update($scope.entity);
        }else {
            object = brandService.add($scope.entity);
        }
        //post需要传参两个
        object.success(function (response) {
            if (response.success) {
                $scope.reloadList();
            } else {
                alert(response.message);
            }
        })
    };
    //查询实体
    $scope.findOne = function (id) {
        brandService.findOne(id).success(function (resonse) {
            $scope.entity = resonse;
        })
    };
    //用户勾选id集合

    //删除
    $scope.del = function () {
        if(confirm('确定要删除么')){
            brandService.del($scope.selectIds).success(
                function (response) {
                    if (response.success){
                        $scope.reloadList();
                    } else {
                        alert(response.message);
                    }
                }
            )}
    };
    //查询
    $scope.searchEntity = {};
    $scope.search = function (page,size) {
        brandService.search(page,size,$scope.searchEntity).success(function (response) {
            $scope.list = response.rows;
            $scope.paginationConf.totalItems = response.total;
        })
    }
});