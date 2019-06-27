app.controller('baseController', function ($scope) {
    //分页
    $scope.paginationConf = {
        currentPage: 1, // 当前页
        totalItems: 10, // 总记录数
        itemsPerPage: 10, // 每页记录数
        perPageOptions: [10, 20, 30, 40, 50], // 分页选项
        onChange: function () { // 当页码或者每页数
            $scope.reloadList();//重新加载
        }
    };
    /*  $scope.paginationConf = {
          currentPage: 1, //当前页
          totalItems: 10, //总记录数
          itemsPerPage: 10, //每页记录数
          perPageOptions: [10, 20, 30, 40, 50], //分页选项
          onChange: function () {
              //改页码自动触发
              $scope.reloadList();
          }
      };*/
    //刷新
    $scope.reloadList = function () {
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);  //每页记录数
    };
    $scope.selectIds = [];
    //往集合中添加id,复选框
    $scope.updateSelection = function ($event, id) {
        if ($event.target.checked) {
            $scope.selectIds.push(id);//像集合中添加id
        } else {
            var index = $scope.selectIds.indexOf(id);//查找位置
            $scope.selectIds.splice(index, 1);//参数1:移除的位置 参数2:移除的个数
        }
    };


    $scope.jsonToString = function (jsonString, key) {
        var json = JSON.parse(jsonString);
        var value = "";
        for (i = 0; i < json.length; i++) {
            if (i > 0) {
                value += ",";
            }
            value += json[i][key];
        }
        return value;
    }

});