<script type='text/javascript'>

$('#btn_dnumber').on('click', redrawForNewStatus);
$('#btn_sort').on('click', redrawForNewStatus);

function redrawForNewStatus() {
    var dnumber = $("[name='dnumber'] option:selected").val();
    var sort    = $("[name='sort'] option:selected").val();

    var pathinfo_path = $("#pathinfo_path").val();
    var is_all        = $("#is_all").val();
    var current_page  = $("#current_page").val();

    var param = "";
    if(is_all == "all"){
        param += "?all&";
    }else{
        param += "?";
    }
    param += "dnumber=" + dnumber;
    param += "&sort="   + sort;
    param += "&_page="  + current_page;

    location.href = "{$thisAlias}" + "/" + pathinfo_path + "/" + param;
}
</script>