document.addEventListener('DOMContentLoaded', () =>{

        const observer = new IntersectionObserver( entries => {
                 if(entries[0].isIntersecting)

                 {
                     console.log('YA esta visible'); 
                 }
        });

        observer.observe(document.querySelector('.premium'));
});