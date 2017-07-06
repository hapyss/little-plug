$().ready(function() {
    /*发稿上传文件*/
    $(".selectUpload .a-upload").on("change", "input[type='file']", function() {
        var uploadName = $(".selectUpload .a-upload .a-uploadName"), 
            filePath = $(this).val(),
            arr = filePath.split('\\'),
            fileName = arr[arr.length - 1];
        uploadName.text(fileName);
        /*if(filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1) {
            $(".fileerrorTip").html("").hide();
            var arr = filePath.split('\\');

            var fileName = arr[arr.length - 1];
            console.log(fileName);
            $(".showFileName").html(fileName);
        } else {
            $(".showFileName").html("");
            $(".fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();
            return false
        };*/
    });
    
    $(".fileUpload .a-upload").on("change", "input[type='file']", function() {
        var uploadName = $(".fileUpload .a-upload .a-uploadName"), 
            filePath = $(this).val(),
            arr = filePath.split('\\'),
            fileName = arr[arr.length - 1];
        uploadName.text(fileName);
        /*if(filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1) {
            $(".fileerrorTip").html("").hide();
            var arr = filePath.split('\\');

            var fileName = arr[arr.length - 1];
            console.log(fileName);
            $(".showFileName").html(fileName);
        } else {
            $(".showFileName").html("");
            $(".fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();
            return false
        };*/
    });
})