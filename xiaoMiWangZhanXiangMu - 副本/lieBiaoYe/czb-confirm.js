/**
 * Created by Administrator on 2017/9/2.
 */
(function ($) {
  'use strict';
  var template = '<div id="confirmModal" class="modal fade">'+
    '<div class="modal-dialog">'+
      '<div class="modal-content">'+
        '<div class="modal-header">'+
    '<button class="close" type="button" data-dismiss="modal">&times;</button>'+
        '<div class="modal-title"></div>'+
    '</div>'+
    //'<div class="modal-body"></div>'+
    '<div class="modal-footer">'+
    '<button type="button" class="btn btn-danger confirm" data-dismiss="modal">是</button>'+
    '<button type="button" class="btn btn-defualt" data-dismiss="modal">否</button>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>';
  /*$.czb_confirm = function (message,id,callback) {
    var $modal = $(template);
    $modal.find('.modal-title').text(message);
    $modal.on('click.czb.confirm','.confirm',function () {
      //console.log('你点的是');
      callback(id);
    });
    $modal.modal({
      backdrop:'static'
    });
  };*/
  $.czb_confirm = function (message,callback) {
    var $modal = $(template);
    $modal.find('.modal-title').text(message);
    $modal.on('click.czb.confirm','.confirm',function () {
      //console.log('你点的是');
      callback();
    });
    $modal.modal({
      backdrop:'static'
    });
  };


})(jQuery);
