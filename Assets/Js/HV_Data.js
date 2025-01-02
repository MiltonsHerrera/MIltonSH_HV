
fetch('../Assets/Data/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`)
        }
        return response.json();
    })
    .then(data => {

        const experienceConteiner = document.getElementById('experienceConteiner');
        const educationSection = document.getElementById('educationSection');
        const studyOther = document.getElementById('studyOther');

        data.experiencia_laboral.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `
                 <h3>${item.empresa}</h3>
                    <p><strong>Cargo:</strong> ${item.cargo}</p>
                    <p><strong>Inicio:</strong> ${item.inicio}</p>
                    <p><strong>Finalización:</strong> ${item.finalizacion}</p>
                    ${item.funciones ? `<p><strong>Funciones:</strong> ${item.funciones.join(', ')}</p>` : ''}
                    <br>
                `;
            experienceConteiner.appendChild(div);
        });

        const formation = data.formacion;

        const div = document.createElement('div');
        div.innerHTML = `
         <h3>${formation.institucion}</h3>
            <p><strong>Título:</strong> ${formation.titulo}</p>
            <p><strong>Año:</strong> ${formation.año}</p>
            <br>
         
            <h3>${formation.educacion_secundaria.institucion}</h3>
            <p><strong>Título:</strong> ${formation.educacion_secundaria.titulo}</p>
            <p><strong>Año:</strong> ${formation.educacion_secundaria.año}</p>
            <p><strong>Secundaria:</strong> ${formation.educacion_secundaria.titulo} (${formation.educacion_secundaria.año})</p>
            <br>
            `;
        educationSection.appendChild(div)

        formation.otros_estudios.forEach(item => {
            const studyDiv = document.createElement('div');
            studyDiv.innerHTML = `
             <h3>${item.titulo}</h3>
                <p><strong>Institución:</strong> ${item.institucion}</p>
                <p><strong>Año:</strong> ${item.año || 'No especificado'}</p>
                <br>
            `;
            studyOther.appendChild(studyDiv);
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));



