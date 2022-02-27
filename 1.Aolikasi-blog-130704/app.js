const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sctions Active 
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();


const offlineConnection = document.querySelector('.offline')
		const onlineConnection = document.querySelector('.online')
		const closeBtn = document.querySelectorAll('.close')
		const refreshBtn = document.querySelector('.refreshBtn')

		function online() {
			offlineConnection.classList.remove('active')
			onlineConnection.classList.add('active')
		}
		function offline() {
			offlineConnection.classList.add('active')
			onlineConnection.classList.remove('active')
		}

		window.addEventListener('online',()=>{
			online();
			setTimeout(() => {
				onlineConnection.classList.remove('active')
			}, 5000);
		})
		window.addEventListener('offline',()=>{
			offline();
		})

		for (let i = 0; i < closeBtn.length; i++) {
			closeBtn[i].addEventListener('click',()=>{
				closeBtn[i].parentNode.classList.remove('active');
				if (closeBtn[i].parentNode.classList.contains('offline')) {
					setTimeout(() => {
						closeBtn[i].parentNode.classList.add('active');
					}, 500);
				}
			})
		}

		refreshBtn.addEventListener("click",()=>{
			window.location.reload();
		})