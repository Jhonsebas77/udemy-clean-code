(() => {

    // función para obtener información de una película por Id
    function getMovieById(id: string) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById(movieId: string) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBiographyById(ActorId: string) {
        console.log({ ActorId });
    }

    // Crear una película
    interface createMovieOptions { title: string, description: string, rating: number, cast: string[] }
    function createMovie({ title, description, rating, cast }: createMovieOptions) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function alreadyExistActor(actorFullName: String) {
        if (actorFullName === 'fernando') return false;
        return true;
    }
    function createActor(fullName: string): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        alreadyExistActor(fullName);

        console.log('Crear actor');
        return true;

    }

    // Ejercicio Extra
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if (isDead) {
            result = 1500;
        } else {
            if (isSeparated) {
                result = 2500;
            } else {
                if (isRetired) {
                    result = 3000;
                } else {
                    result = 4000;
                }
            }
        }

        return result;
    }
})();


