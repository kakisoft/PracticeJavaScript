```js
    // ラジオボタンが table の中にある場合、セルをクリックした場合も、ラジオボタンの操作を有効とする。
    $(".t03 td").click
    (
        function()
        {
            if($("#editable").val() == "1") {
                var radio = $(this).find("input:radio");

                if($(radio).size() > 0)
                {
                    var value = $(radio).val();
                    var name = $(radio).attr("name");
                    $("input:radio[name='" + name +  "']").val([value]);

                    reflect_other_radio_value_if_needed(name, value);
                }
            }
        }
    );
```
