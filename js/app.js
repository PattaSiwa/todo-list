$(() => {

    $('ul').on('click', 'li', (event) => {
        const $li = $(event.currentTarget)
        $li.toggleClass('completed')

    })

    $('ul').on('click', 'span', (event) => {
        const $span = $(event.currentTarget).parent()

        $span.fadeOut(500, () => {
            $span.remove()
        })
        event.stopPropagation()

    })

    $("input[type='text'").keypress(function (event) {
        if (event.which === 13) {
            const $newTask = $(this).val()
            $(this).val('')

            $('ul').append("<li><span class='deleteSpan'><i class='fa fa-ban' aria-hidden='true'></i></span> " + $newTask + "</li>")


        }
    })

    //get modal element

    $('#modalBtn').on('click', (event) => {
        console.log('hello')
        $('.modal').css('display', 'block')
    })

    $('.closeBtn').on('click', () => {
        $('.modal').css('display', 'none')
    })




})

