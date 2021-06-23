"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const orders_routes_1 = require("../src/routes/orders.routes");
const users_routes_1 = require("../src/routes/users.routes");
const auth_routes_1 = require("./routes/auth.routes");
// Inicializamos express desde una constante llamada 'app'
// Esta tendra toda la funcionalidad
const app = express_1.default();
//Aqui estoy usando este metodo porque el cors importado no funciona!!!!
//Despues de varios intentos Cors no funciona, asi que usamos esta configuracion.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
//middlewares Esto siempre va delante
app.use(morgan_1.default('dev'));
// app.use(cors());
//app.use(express.urlencoded({extended: false}));
app.use(express_1.default.json());
//  app.use(bodyparser.json());
//app.use(ValidationError.apply)
// Configurando el servidor
app.set('port', 3000);
app.use('/login', auth_routes_1.authRoutes.router);
app.use('/auth', auth_routes_1.authRoutes.router);
app.use('/users', users_routes_1.userRoutes.router);
app.use('/orders', orders_routes_1.orderRoutes.router);
// app.post('/orders', orderRoutes.router); // Este metodo lo he añadido de prueba 
// Levantando el servidor
app.listen(app.get('port'), () => {
    console.log(`El servidor se ha levantado ${app.get('port')}`);
});
// routes
app.get('/', (req, res) => {
    res.send(`THE API is at http://localhost:${app.get('port')}`);
});
