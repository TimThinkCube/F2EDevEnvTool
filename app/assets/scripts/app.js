import $ from 'jquery';

$(function(){
    console.log('jquery include success')
})


const ajaxRequest = (function() {
    return {
      //Ajax
      setData: function(url, data, asyncChoose) {
        const ajax = $.ajax({
          type: "post",
          url: url,
          data: data,
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          timeout: 60000,
          async: asyncChoose
        });
        return ajax;
      }
    };
  })();
  
  ajaxRequest.setData("", "", false);
  ajaxRequest.done(function(response) {
    alert("success");
    var Data = JSON.parse(response.d);
    $.each(Data, function(key, item) { });
  });
  ajaxRequest.fail(function(jqXHR, exception) {
    alert("error");
    var msg = "";
    if (jqXHR.status === 0) {
      msg = "Not connect.\n Verify Network.";
    } else if (jqXHR.status == 404) {
      msg = "Requested page not found. [404]";
    } else if (jqXHR.status == 500) {
      msg = "Internal Server Error [500].";
    } else if (exception === "parsererror") {
      msg = "Requested JSON parse failed.";
    } else if (exception === "timeout") {
      msg = "Time out error.";
    } else if (exception === "abort") {
      msg = "Ajax request aborted.";
    } else {
      msg = "Uncaught Error.\n" + jqXHR.responseText;
    }
    console.log(msg);
  });
  ajaxRequest.always(function() {
    alert("complete");
  });




