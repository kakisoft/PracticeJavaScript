```js
    //-----< テキストボックスの不正入力を検出 >-----
    has_check1_error = false;
    // input type を検出
    $("input").filter(".check1").each
    (
        function()
        {
            var name = $(this).attr("name")
            var value = $(this).val();

            if(value != ""){
                var p1 = 'parent_' + name;
                var parent_element_name = $('#parent_' + name).val();
                var parent_element_value = $("input[name='" + parent_element_name + "']:checked").val();

                if(parent_element_value == 1 || parent_element_value == -1 ){
                    $(this).parent().addClass("notice_background");
                    has_check1_error = true;
                }
            }
        }
    );

    if(has_check1_error)
    {
        alert("何かエラーでてるよ！");
        return;
    }
```

