<script type='text/javascript'>

url = '?' +['_page='+ pageNo
	,'id'+ $("#id").val()
	,'email='+ $("#email").val()
	,'c_email='+ $("input[name='c_email']:checked").val()
	,'admin='+ $("input[name='admin']:checked").val()
	,'name='+ $("#name").val()
	,'c_name='+ $("input[name='c_name']:checked").val()
	,'company='+ $("#company").val()
	,'c_company='+ $("input[name='c_company']:checked").val()
	,'tel='+ $("#tel").val()
	,'c_tel='+ $("input[name='c_tel']:checked").val()
	,'lang='+ $("input[name='lang']:checked").val()
	].join('&');

</script>

//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

<script type='text/javascript'>

    jQuery(function($) {
        if (window.history && window.history.pushState) {
            $(window).on('popstate', function(e){
                var pageNo = document.location.search.substring(1).match(/_page=([0-9]+)/);
                if (pageNo) {
                    xiJmesseSeachUsersPager(pageNo[1] , 0);
                } else {
                    xiJmesseSeachUsersPager(1 , 0);
                }
            });
        }
    });
        function xiJmesseSeachUsersPager(pageNo , ispush) {
            $.ajax({
                    type: "GET",
                    url: "{$interfacePath}",
                    data : {
                            'cmd'       : 'search'
                        ,'blockId'   : {$blockId}
                        ,'_page'     : pageNo
                        ,'id'        : $("#id").val()
                        ,'email'     : $("#email").val()
                        ,'c_email'   : $("input[name='c_email']:checked").val()
                        ,'admin'     : $("input[name='admin']:checked").val()
                        ,'name'      : $("#name").val()
                        ,'c_name'    : $("input[name='c_name']:checked").val()
                        ,'company'   : $("#company").val()
                        ,'c_company' : $("input[name='c_company']:checked").val()
                        ,'tel'       : $("#tel").val()
                        ,'c_tel'     : $("input[name='c_tel']:checked").val()
                        ,'lang'      : $("input[name='lang']:checked").val()
                    },
                    crossDomain: false,
                    async: false,
                    dataType : 'html',
                    scriptCharset: 'utf-8',
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('Pragma', 'no-cache');
                        xhr.setRequestHeader('Cache-Control', 'no-cache');
                        xhr.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
                    },
                }).success(function(response){
                    $("#resultArea").html($(response).find('#resultArea').html());
                    if (ispush) {
                        url = '?' +['_page='+ pageNo
                            ,'id'+ $("#id").val()
                            ,'email='+ $("#email").val()
                            ,'c_email='+ $("input[name='c_email']:checked").val()
                            ,'admin='+ $("input[name='admin']:checked").val()
                            ,'name='+ $("#name").val()
                            ,'c_name='+ $("input[name='c_name']:checked").val()
                            ,'company='+ $("#company").val()
                            ,'c_company='+ $("input[name='c_company']:checked").val()
                            ,'tel='+ $("#tel").val()
                            ,'c_tel='+ $("input[name='c_tel']:checked").val()
                            ,'lang='+ $("input[name='lang']:checked").val()
                            ].join('&');
                        
                        if (window.history && window.history.pushState) {
                            window.history.pushState(null, null, url);
                        }
                    }
                }).fail(function(XMLHttpRequest, textStatus, errorThrown){
                    alert(errorThrown);
            });
        }

</script>
