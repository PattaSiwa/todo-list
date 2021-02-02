$(() => {

    $('li').click((event) => {
        const $li = $(event.currentTarget)
        $li.toggleClass('completed')

    })

    $('span').click((event) => {
        const $span = $(event.currentTarget).parent()

        $span.fadeOut(500, () => {
            $span.remove()
        })
        event.stopPropagation()

    })




})

