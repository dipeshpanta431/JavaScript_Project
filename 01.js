const body = document.querySelector('body');
        const buttons = document.querySelectorAll('.button');

        buttons.forEach(function (button) {
            console.log(button);
            button.addEventListener('click', function (e) {
                console.log(e);
                console.log(e.target);
                switch(e.target.id){
                    case 'grey': body.style.backgroundColor='grey';break;
                    case 'red': body.style.backgroundColor='red';break;
                    case 'yellow': body.style.backgroundColor='yellow';break;
                    case 'purple': body.style.backgroundColor='purple';break;
                    default:  body.style.backgroundColor='#212121';

                }

            })
        });