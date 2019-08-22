var DatabaseSingleton = (function() {
        var instance;
        function createInstance() {
            var postgresDatabase = new Object("Database instance initialized!");
            return postgresDatabase;
        }

        return {
            getInstance: function() {
                if (!instance) {
                    instance = createInstance();
                } 
                return instance;
            }
         }
    })();

    function databaseSingletonTest()
    {
        var oracle = DatabaseSingleton.getInstance();
        var postgres = DatabaseSingleton.getInstance();
        console.log("same database instance? %s",oracle===postgres);
    }
    databaseSingletonTest();

