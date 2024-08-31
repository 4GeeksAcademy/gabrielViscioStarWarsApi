const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getCharacters: ()=>{
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				  };
				  
				  fetch("https://www.swapi.tech/api/people", requestOptions)
					.then((response) => response.json()) // Convertir la respuesta a JSON
					.then((result) => {
					  // Verificar si result y result.results existen y contienen datos
					  if (result && result.results) {
						// Guardar los datos en la propiedad characters dentro del store
						setStore({
						  characters: result.results
						});
					  }
					})
					.catch((error) => console.error("Error:", error));
			},
			loadSomeData: () => {
				// Aquí puedes cargar datos desde una API o realizar otras acciones de inicialización
				
			},
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
