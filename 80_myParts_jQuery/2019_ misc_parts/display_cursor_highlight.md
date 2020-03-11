```js
    //カーソル行のハイライト表示
    $(".t03 td").filter(".color0, .color1, .color2, .color5").each
    (
        function()
        {
            var tr = $(this).parents("tr").get(0);

            var holdedClassesString = $(this).attr("class");
            var holdedClassesList = holdedClassesString.split(" ");
            var findedTargetClassList = holdedClassesList.filter( (el) => el.trim().indexOf("event_color_") > -1 );

            if( findedTargetClassList.length > 0 ){
                var targetId = String(findedTargetClassList[0]).replace("event_color_", "");

                $(this).hover
                (
                    function()
                    {
                        $(this).css("background-color", "#dddddd");
                        $(this).prevAll("td").filter(".color0, .color1, .color2, .color5").css("background-color", "#dddddd");
                        $(tr).prevAll().find("td").filter(".event_color_" + targetId).css("background-color", "#dddddd");
                    }
                    ,function()
                    {
                        $(this).css("background-color", "");
                        $(this).prevAll("td").filter(".color0, .color1, .color2, .color5").css("background-color", "");
                        $(tr).prevAll().find("td").filter(".event_color_" + targetId).css("background-color", "");
                    }
                )
            }
        }
    );
```

