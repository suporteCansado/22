const showSection = (sectionId)=>{
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const sectionsShow = document.getElementById(sectionId)
    sectionsShow.style.display = 'block';
}