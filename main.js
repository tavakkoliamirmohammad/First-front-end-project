$(function () {

    function undo() {

    }

    $(document).on('click', '.del', function () {
        $(this).parent().parent().remove();
    });
    $(document).on('click', '.undo', function () {
        if($(this).val() === '0'){
            $(this).parent().find('p').css('text-decoration', 'line-through');
            $(this).val('1');
        }
        else {
            $(this).parent().find('p').css('text-decoration', 'none');
            $(this).val('0');
        }
    });

    $('input').change(function () {

        if (this.value === 'all') {
            $('div').show();

        } else if (this.value === 'comp') {
            $('p').each(function () {
                if ($(this).css('text-decoration').split(' ')[0] === 'line-through') {
                    $(this).parent().parent().show()
                } else {
                    $(this).parent().parent().hide()
                }
            })
        } else if (this.value === 'not-comp') {
            $('p').each(function () {
                if ($(this).css('text-decoration').split(' ')[0] === 'line-through') {
                    $(this).parent().parent().hide()
                } else {
                    $(this).parent().parent().show()
                }
            })
        }
    });
    $('#form_info').submit(function () {
        let title = $('#input_form').val();
        let content = $('#content-form').val();
        let title_h = $('<h1 class="ui center aligned top attached header"></h1>').text(title);
        let par = $('<p></p>').text(content);
        let but1 = '<button class="ui positive button undo" value="0">Mark done</button>';
        let but2 = '<button class="ui red button del">Remove</button>';
        let div_title = $('<div class="ui center aligned bottom attached segment"></div>').append(par, but1, but2);
        $('#main').append($('<div class="five wide column"></div>').append(title_h, div_title));
        event.preventDefault();
    });

});
